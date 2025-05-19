import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStack } from "../types/rotas"
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import { useState } from "react";



const LoginScreen = ({navigation, route}: NativeStackScreenProps<RootStack,"LoginScreen">) => {
    const { user } = route.params;

    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");


    const HandleLogin = () => {

        if (emailLogin.trim() === user.Email && senhaLogin.trim() === user.Senha){
            alert("Login efetuado!");
            navigation.navigate("IntroScreen");
        }else {
            alert("Email ou senha incorretos");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.appName}>AppName</Text>
            </View>
            <View style={styles.container2}>
            <Text style={styles.text1}>Acesse sua conta para iniciar sua jornada.</Text>
            <TextInput style={styles.textInputs} placeholder="Email" onChangeText={setEmailLogin}/>
            <TextInput style={styles.textInputs} placeholder="Senha" onChangeText={setSenhaLogin}/>
            <TouchableOpacity style={styles.button1}><Text style={styles.textButton1} onPress={HandleLogin}>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.textButton3} onPress={() => navigation.navigate("CadastroScreen")}><Text style={styles.textQuestion}>Não possuo uma conta</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("IntroScreen")}><Text style={styles.textButton2}>Continuar sem conta</Text></TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container1: {
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        backgroundColor: "#fff"
    },
    container2:{
        top: "5%"
    },
    textInputs: {
        borderWidth: 2,
        marginHorizontal: "7%",
        marginVertical: "2%",
        borderRadius:8,
        borderColor: "#1B1B1B",
        fontFamily: "Patrick Hand",
        fontSize: 18,
        paddingLeft: 20
    },
    button1:{
        backgroundColor: "#1B1B1B",
        borderRadius: 8,
        height: 52,
        marginHorizontal: "7%",
        top: "2%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    button2: {
        top: "75%",
        alignItems: "center",
        justifyContent: "center",
    },
    appName: {
        top: "25%",
        fontFamily:"Patrick Hand",
        fontSize: 22
    },
    text1: {
        fontSize: 24,
        fontFamily:"Patrick Hand",
        marginHorizontal: "7%",
        marginBottom: "7%"
    },
    textButton1: {
        color: "#fff",
        fontSize: 22,
        fontFamily:"Patrick Hand"
    },
    textButton2: {
        color: "#1B1B1B",
        fontSize: 16,
        fontFamily:"Patrick Hand"
    },
    textButton3: {
        top: "36%"
    },
    textQuestion: {
        color: "#1B1B1B",
        fontSize: 18,
        fontFamily:"Patrick Hand",
        alignSelf: "center"
    }
})

export default LoginScreen;