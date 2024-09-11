import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Create = () => {
  // Fechas destacadas en rojo
  const highlightedDates = [5, 9, 17, 21, 23, 28];

  // Función para manejar el evento de reserva
  const handleRent = (day) => {
    // Aquí puedes definir lo que sucederá cuando el día sea presionado.
    console.log(`Día reservado: ${day}`);
  };

  // Generar el calendario para septiembre 2024
  const generateCalendar = () => {
    const weeks = [];
    const daysInMonth = 30; // Septiembre tiene 30 días

    // Primer día de septiembre 2024 es un domingo
    const firstDayOfMonth = 0; // Domingo
    const days = [];
    
    // Crear un array con los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    // Crear las semanas
    let week = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(null); // Espacios en blanco antes del primer día
    }
    days.forEach((day) => {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    });
    if (week.length > 0) {
      weeks.push(week); // Última semana con días faltantes
    }

    return weeks;
  };

  const calendarWeeks = generateCalendar();

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.wall} resizeMode={"cover"}>
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
                className="max-w-[80px] w-full h-[80px] rounded-lg bg-white p-8"
              />
            </View>

            {/* Título y calendario */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Reservar Salón Comunal</Text>
              <Text style={styles.infoText}>
                La reserva del salón comunal se gestiona a través de un calendario interactivo. Los propietarios pueden seleccionar un día del mes en el calendario y reservar el espacio para ese día. Este sistema facilita la programación y garantiza una administración eficiente de las citas para el uso del salón comunal.
              </Text>
              <Text style={styles.monthTitle}>Septiembre 2024</Text>

              <View style={styles.calendar}>
                {/* Iniciales de los días de la semana */}
                <View style={styles.week}>
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((dayInitial, index) => (
                    <View key={index} style={styles.day}>
                      <Text style={styles.dayText}>{dayInitial}</Text>
                    </View>
                  ))}
                </View>

                {calendarWeeks.map((week, index) => (
                  <View key={index} style={styles.week}>
                    {week.map((day, i) => (
                      <TouchableOpacity
                        key={i}
                        style={[
                          styles.day,
                          highlightedDates.includes(day) && styles.highlightedDay
                        ]}
                        onPress={() => day && handleRent(day)}
                      >
                        <Text
                          style={[
                            styles.dayText,
                            highlightedDates.includes(day) && styles.highlightedText
                          ]}
                        >
                          {day || ''}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  contentContainer: {
    backgroundColor: '#4a4a4a',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 50,
  },
  monthTitle: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendar: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  day: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  dayText: {
    fontSize: 16,
    color: '#fff',
  },
  highlightedDay: {
    backgroundColor: '#d9534f', // Rojo danger
  },
  highlightedText: {
    color: '#fff',
  },
});

export default Create;
