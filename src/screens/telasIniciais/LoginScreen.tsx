import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStack } from "../../types/rotas"
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native"
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../types/User";
import GradientWord from "../../gradient/GradientWord";
import GradientButton from "../../gradient/GradientButton";



const LoginScreen = ({navigation}: NativeStackScreenProps<RootStack,"LoginScreen">) => {

    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");


    const HandleLogin = async() => {

        try{
            const dados = await AsyncStorage.getItem("usuarios");
            const usuarios = dados ? JSON.parse(dados) : [];

            const usuarioEncontrado = usuarios.find(
                (usuario: User) => usuario.Email === emailLogin.trim() && usuario.Senha === senhaLogin.trim()
            );

            if (usuarioEncontrado) {
                alert("Login realizado com sucesso!");
                navigation.navigate("IntroScreen", {user: usuarioEncontrado});
            } else {
                alert("Email ou senha inválidos!")
            }
        } catch (error) {
            alert("Erro ao autenticar usuário!");
            console.log(error);
        }
    
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={require("../../Images/Label.png")} style={styles.img}/>
            </View>
            <View style={styles.container2}>
                <View style={styles.viewGradient}>
                    <GradientWord style={styles.txtGradient}>Acesse sua conta</GradientWord>
                    <Text style={styles.text1}> para continuar</Text>
                </View>
            <Text style={styles.text2}>sua jornada.</Text>
            <TextInput style={styles.textInputs} placeholder="Email" onChangeText={setEmailLogin}/>
            <TextInput style={styles.textInputs} placeholder="Senha" secureTextEntry={true} onChangeText={setSenhaLogin}/>
            <GradientButton title="Entrar" onPress={HandleLogin} style={styles.btnEntrar}/>
            <TouchableOpacity style={styles.textButton2} onPress={() => navigation.navigate("CadastroScreen")}><Text style={styles.textButton}>Não possuo uma conta</Text></TouchableOpacity>
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
        alignItems: "center",
        elevation: 5,
        backgroundColor: "#fff"
    },
    img: {
        alignSelf: "center",
        marginTop: "23%"
    },
    container2:{
        top: "5%"
    },
    viewGradient: {
        flexDirection: "row",
        marginHorizontal: "7%"
    },
    txtGradient:{
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 800,
    },
    textInputs: {
        borderWidth: 2,
        marginHorizontal: "7%",
        marginVertical: "2%",
        borderRadius:8,
        borderColor: "#1B1B1B",
        fontFamily: "Inter",
        fontSize: 18,
        paddingLeft: 20
    },
    text1: {
        fontSize: 24,
        fontFamily:"Inter",
        fontWeight: 800
    },
    text2:{
        fontSize: 24,
        fontFamily: "Inter",
        marginLeft: "7%",
        fontWeight: 800,
        marginBottom: "7%"
    },
    btnEntrar: {
        height: "14%",
        width: "85%",
        marginTop: "5%"
    },
    textButton2: {
        top: "36%"
    },
    textButton: {
        color: "#1B1B1B",
        fontSize: 16,
        fontFamily:"Inter",
        alignSelf: "center"
    }
})

export default LoginScreen;