import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStack } from "../types/rotas";

const FirstScreen = ({ navigation }: NativeStackScreenProps<RootStack, "FirstScreen">) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text2}>Olá</Text>
                <Text style={{top: "10%"}}>Seja Bem-Vindo(a) ao App</Text>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity 
                    style={styles.button1}
                    onPress={() => navigation.navigate('CadastroScreen')}
                >
                    <Text style={styles.text}>Vamos Iniciar</Text>
                </TouchableOpacity>
                <Text>Já possui conta? Clique no botão abaixo</Text>
                <TouchableOpacity 
                    style={styles.button2}
                >
                    <Text style={styles.text2}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE",
        alignItems: "center"
    },
    container1: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#1B1B1B",
        borderWidth: 3,
        padding: 30,
        borderRadius: 16,
        height: "20%",
        width: "75%",
        top: "15%",
        backgroundColor: "#fff"
    },
    container2: {
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 40,
        height: "33%",
        alignItems: "center",
    },
    button1:{
        backgroundColor: "#1B1B1B",
        borderRadius: 8,
        height: 52,
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    button2:{
        backgroundColor: "#fff",
        borderRadius: 8,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        width:"100%",
        borderWidth: 4,
        borderColor: "#1B1B1B"
    },
    text: {
        color: "#fff",
        fontSize: 22,
        fontFamily:"Patrick Hand"
    },
    text2: {
        color: "#000",
        fontSize: 22,
        fontFamily:"Patrick Hand"
    }
})

export default FirstScreen;