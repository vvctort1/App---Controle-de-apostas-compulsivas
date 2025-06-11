import { Image, View,Text, StyleSheet } from "react-native";
import GradientButton from "../../gradient/GradientButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../../types/rotas";





const AutorizacaoScreen = ({ navigation, route }: NativeStackScreenProps<RootStack, "AutorizacaoScreen">) => {

    const { user } = route.params;

    return(
        <View style={styles.container}>
            <Image source={require("../../Images/shield.png")} style={styles.img}/>
            <Text style={styles.txt}>Podemos usar seus dados para oferecer{"\n"}     recomendações personalizadas?</Text>
            <Image source={require("../../Images/espantalho.png")} style={styles.img2}/>
            <GradientButton title="Continuar" onPress={() => navigation.navigate("ReadyScreen", {user: user})}  style={styles.btnContinuar}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    img: {
        alignSelf: "center",
        marginTop: "30%",
        marginBottom: "10%",
        height: "7%",
        width: "13%"
    },
    txt: {
        fontSize: 18,
        fontFamily: "Inter",
        lineHeight: 24,
        alignSelf: "center",
        fontWeight: 500
    },
    img2: {
        alignSelf: "center",
        marginTop: "10%"
    },
    btnContinuar: {
        width: "85%",
        marginTop: "170%",
        position: "absolute",
    }
})

export default AutorizacaoScreen;