import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';


export default function CalendarScreen() {

    const [ dataInicio, setDataInicio ] = useState('2025-05-03');

  const gerarDiasLimpos = () => {
    const hoje = dayjs();
    const inicio = dayjs(dataInicio);
    const dias = hoje.diff(inicio, 'day') + 1;

    const marcacoes: Record<string, any> = {};
    for (let i = 0; i < dias; i++) {
      const data = inicio.add(i, 'day').format('YYYY-MM-DD');
      marcacoes[data] = {
        color: '#10b981', // verde claro
        textColor: '#1B1B1B',
      };
    }

    return { marcacoes, dias };
  };

  const { marcacoes, dias } = gerarDiasLimpos();

  const zerarDiasSemApostas = () => {
    setDataInicio(dayjs().toString());

  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>👏 {dias} dia(s) sem apostas!</Text>
      <Calendar
        markingType="period"
        markedDates={marcacoes}
        theme={{
          todayTextColor: '#10b981',
          arrowColor: '#10b981',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayFontFamily: "Patrick Hand",
          textMonthFontFamily: "Patrick Hand",
        }}
      />
      <TouchableOpacity style={styles.button} onPress={zerarDiasSemApostas}><Text style={styles.textButton}>Apostei hoje :(</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
    margin: "5%",
    borderRadius: 10
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "Patrick Hand"
  },
  button: {
        backgroundColor: "#1B1B1B",
        borderRadius: 8,
        height: 52,
        width: 278,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "15%"
    },
    textButton: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Patrick Hand"
    },
});
