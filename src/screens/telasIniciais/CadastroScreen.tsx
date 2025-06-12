import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RootStack } from "../../types/rotas";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GradientWord from "../../gradient/GradientWord";
import GradientButton from "../../gradient/GradientButton";

const CadastroScreen = ({ navigation }: NativeStackScreenProps<RootStack, "CadastroScreen">) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    const [usuarios, setUsuarios] = useState<User[]>([]);


    useEffect(() => {
      const verUsuariosSalvos = async () => {
        const dados = await AsyncStorage.getItem("usuarios");
        console.log("Usuários salvos:", JSON.parse(dados || "[]"));
      };
      verUsuariosSalvos();
    }, []);


    const salvarUsuario = async(usuario: User) => {
        try{
            const usuariosExistentes = await AsyncStorage.getItem("usuarios");
            const lista = usuariosExistentes ? JSON.parse(usuariosExistentes) : [];
            lista.push(usuario);
            await AsyncStorage.setItem("usuarios", JSON.stringify(lista));
        } catch (error) {
            alert("Erro ao salvar usuário!");
        }
    }


    const isEmailValid = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.toLowerCase());
    };

    const addUsuario = async() => {

        if (!nome.trim() || !email.trim() || !senha.trim() || !confirmacaoSenha.trim()){
            alert("Preencha todos os campos");
        
            return
        }else if (!isEmailValid(email.trim())) {
            return alert("Email Inválido!");
            
        }else if(senha.trim().length < 8) {
            return alert("Senha deve conter no mínimo 8 caracteres!")

        } else if(senha.trim() !== confirmacaoSenha.trim()) {
            alert("Falha na confirmação da senha!")
            return
        } 
        console.log(nome.trim())
        console.log(email.trim())
        console.log(senha.trim())
        console.log(confirmacaoSenha.trim())

        const novoUsuario: User = {
            Nome: nome.trim(),
            Email: email.trim(),
            Senha: senha.trim(),
        }

        setUsuarios([...usuarios, novoUsuario]);
        await salvarUsuario(novoUsuario);

        alert("Cadastro realizado com sucesso!");
        navigation.navigate("LoginScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={require("../../Images/Label.png")} style={styles.img}/>
            </View>
            <View style={styles.container2}>
                <View style={styles.viewGradient}>
                    <GradientWord style={styles.txtGradient}>Crie sua conta</GradientWord>
                    <Text style={styles.text1}> para salvar seu</Text>
                </View>
                <Text style={styles.text2}>progresso com segurança</Text>
                <TextInput style={styles.textInputs} placeholder="Nome" onChangeText={setNome} />
                <TextInput style={styles.textInputs} placeholder="Email" onChangeText={setEmail} />
                <TextInput style={styles.textInputs} placeholder="Senha" onChangeText={setSenha} secureTextEntry={true} />
                <TextInput style={styles.textInputs} placeholder="Confirmar Senha" secureTextEntry={true} onChangeText={setConfirmacaoSenha} />
                <GradientButton title="Confirmar" onPress={addUsuario} style={styles.btnConfirmar}/>
                <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("LoginScreen")}><Text style={styles.textButton1}>Já possuo uma conta</Text></TouchableOpacity>
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
    img:{
        alignSelf: "center",
        marginTop: "21%"
    },
    container2: {
        top: "5%"
    },
    textInputs: {
        borderWidth: 2,
        marginHorizontal: "7%",
        marginVertical: "2%",
        borderRadius: 8,
        borderColor: "#1B1B1B",
        fontFamily: "Inter",
        fontSize: 16,
        color: "#1B1B1B",
        paddingLeft: 20
    },
    btnConfirmar: {
        height: "12%",
        width: "85%",
        marginTop: "5%"
    },
    button2: {
        top: "34%",
        alignItems: "center",
        justifyContent: "center",
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
    text1: {
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 800,
    },
    text2: {
        fontSize: 24,
        fontFamily: "Inter",
        fontWeight: 800,
        marginHorizontal: "7%",
        marginBottom: "5%"
    },
    textButton1: {
        color: "#1B1B1B",
        fontSize: 16,
        fontFamily: "Inter"
    }
})

export default CadastroScreen;