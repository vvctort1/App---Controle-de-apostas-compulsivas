import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStack } from "../types/rotas";



const IntroScreen = ({ navigation }: NativeStackScreenProps<RootStack,"IntroScreen">) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Você está pronto para começar uma nova fase. Vamos entender como podemos te apoiar melhor.</Text>
            <Image source={require("../Images/forest.gif")} style={styles.img}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("Question1Screen")}><Text style={styles.textButton}>Continuar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    text: {
        fontFamily: "Patrick Hand",
        fontSize: 22,
        marginBottom: "15%",
        alignSelf: "center",
        marginHorizontal: "9%",
    },
    img: {
        width: 247,
        height: 246,
        borderRadius: 2,
        alignSelf: "center",
        marginBottom: "20%"
    },
    textButton: {
        fontFamily: "Patrick Hand",
        fontSize: 22,
        color: "#FFF"
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
        bottom: "13%"
    },
})

export default IntroScreen;