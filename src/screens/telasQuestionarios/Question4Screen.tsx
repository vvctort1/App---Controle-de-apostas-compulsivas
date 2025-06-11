import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStack } from "../../types/rotas";
import { useState } from "react";
import GradientButton from "../../gradient/GradientButton";



const Question4Screen = ({ navigation, route }: NativeStackScreenProps<RootStack,"Question4Screen">) => {

    const { user } = route.params;
    
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
            <GradientButton title="Continuar" onPress={() => navigation.navigate("Question5Screen", {user:user})} style={styles.btnContinuar}/>
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
    btnContinuar: {
        width: "85%",
        marginTop: "144%",
        position: "absolute",
    }
})

export default Question4Screen;