import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RootStack } from "../types/rotas";
import { useState } from "react";
import { User } from "../types/User";

const CadastroScreen = ({ navigation }: NativeStackScreenProps<RootStack, "CadastroScreen">) => {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [usuarios, setUsuarios] = useState<User[]>([]);

    const addUsuario = () => {

        if (!email.trim() || !senha.trim()) return;

        const novoUsuario: User = {
            Email: email.trim(),
            Senha: senha.trim(),
        }

        setUsuarios([...usuarios, novoUsuario]);

        alert("Usuário novo adicionado!")

        navigation.navigate("LoginScreen", {user: novoUsuario})
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.appName}>AppName</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>Primeiro Passo</Text>
                <Text style={styles.text2}>Vamos criar sua conta</Text>
                <TextInput style={styles.textInputs} placeholder="Nome"/>
                <TextInput style={styles.textInputs} placeholder="Email" onChangeText={setEmail}/>
                <TextInput style={styles.textInputs} placeholder="Senha" onChangeText={setSenha}/>
                <TextInput style={styles.textInputs} placeholder="Confirmar Senha" />
                <TouchableOpacity style={styles.button1} onPress={addUsuario}><Text style={styles.textButton1}>Cadastrar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("FirstScreen")}><Text style={styles.textButton2}>Voltar a tela inicial</Text></TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
        borderRadius: 8,
        borderColor: "#1B1B1B",
        fontFamily: "Patrick Hand",
        fontSize: 18,
        paddingLeft: 20
    },
    button1: {
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
        top: "34%",
        alignItems: "center",
        justifyContent: "center",
    },
    appName: {
        top: "25%",
        fontFamily: "Patrick Hand",
        fontSize: 22
    },
    text1: {
        fontSize: 24,
        fontFamily: "Patrick Hand",
        marginHorizontal: "7%",
    },
    text2: {
        fontSize: 24,
        fontFamily: "Patrick Hand",
        marginHorizontal: "7%",
        marginBottom: "5%"
    },
    textButton1: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Patrick Hand"
    },
    textButton2: {
        color: "#1B1B1B",
        fontSize: 16,
        fontFamily: "Patrick Hand"
    }
})

export default CadastroScreen;