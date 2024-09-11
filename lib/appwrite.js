import { Platform } from "react-native";
import { ID, Account, Client, Databases } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "co.edu.sena",
  projectId: "66d749a1000e83de329a",
  databaseId: "66d76fb80005950a4e55",
  userCollectionId: "66d76fee00282eeec7b4",
  videosCollectionId: "66d770200018922ae89c",
  storageId: "66d772db0014167d6d8a",
};

// Init your React Native SDK
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

const account = new Account(client);
const databases = new Databases(client);

export const createUser = async (email, password, username, labels) => {
  try {
    // Register User
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    await signIn(email, password);
  
    await account.updatePrefs({ labels: labels });

    if (!newAccount) throw new Error('Account creation failed');

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username, // Remove password for security reasons
      }
    );

    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export async function signIn(email, password) {
  try {
    await logoutUser();

    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserLabels() {
  try {
    const user = await account.get();
    const labels = user.prefs?.labels || [];  // Check if prefs and labels exist
    console.log(labels);
    return labels;
  } catch (error) {
    console.error(error);
  }
}

const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error(error);
  }
};
