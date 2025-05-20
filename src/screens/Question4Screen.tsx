import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStack } from "../types/rotas";
import { useState } from "react";



const Question4Screen = ({ navigation }: NativeStackScreenProps<RootStack,"Question4Screen">) => {
    
    const [valor, setValor] = useState('');

    const formatarParaReais = (texto: string) => {
    // Remove tudo que não for número
    const numero = texto.replace(/\D/g, '');

    // Converte para centavos (divide por 100)
    const numeroFloat = parseFloat(numero) / 100;

    // Formata no padrão brasileiro
    const formatado = numeroFloat.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatado;
  };

  const handleChange = (texto: string) => {
    const formatado = formatarParaReais(texto);
    setValor(formatado);
  };

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Em média, quanto você gasta por{'\n'}semana em apostas?</Text>
            <TextInput placeholder="R$ 0,00" style={styles.txtInput} keyboardType="numeric" value={valor} onChangeText={handleChange}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Question5Screen")}><Text style={styles.txtButton}>Próximo</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    },
    txt: {
        fontFamily: "Patrick Hand",
        fontSize: 26,
        top: "4%",
        marginBottom: "20%"
    },
    txtInput:{
        width: 260,
        height: 48,
        borderWidth: 2,
        borderColor: "#1B1B1B",
        borderRadius: 8,
        fontFamily: "Patrick Hand",
        fontSize: 18,
        paddingLeft: "4%"
    },
    button:{
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
    txtButton: {
        color: "#fff",
        fontSize: 22,
        fontFamily:"Patrick Hand"
    }
})

export default Question4Screen;