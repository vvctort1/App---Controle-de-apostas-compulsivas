import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { RootStack } from "../../types/rotas";
import GradientButton from "../../gradient/GradientButton";
import GradientWord from "../../gradient/GradientWord";



const IntroScreen = ({ navigation, route }: NativeStackScreenProps<RootStack,"IntroScreen">) => {

    const { user } = route.params;

    return(
        <View style={styles.container}>
            <Image source={require("../../Images/logo.png")} style={styles.img0}/>
            <Text style={styles.txt1}>VOCÊ ESTÁ PRONTO PARA COMEÇAR</Text>
            <View style={styles.viewGradient}>
                <Text style={styles.txt1}> UMA </Text>
                <GradientWord style={styles.txt1}>NOVA FASE</GradientWord>
                <Text style={styles.txt1}>. VAMOS ENTENDER </Text>
            </View>
            <View style={styles.viewGradient}>
                <Text style={styles.txt1}>COMO PODEMOS TE</Text>
                <GradientWord style={styles.txt1}> APOIAR </GradientWord>
                <Text style={styles.txt1}>MELHOR.</Text>
            </View>
            <Image source={require("../../Images/placa.png")} style={styles.img}/>
            <GradientButton title="Continuar" onPress={() => navigation.navigate("Question1Screen", {user:user})} style={styles.btnContinuar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    img0: {
        marginTop: "18%",
        marginBottom: "20%"
    },
    viewGradient: {
        flexDirection: "row"
    },
    txt1: {
        fontFamily: "Inter",
        fontWeight: 800,
        fontSize: 18
    },
    img: {
        width: "80%",
        height: "40%",
        borderRadius: 2,
        alignSelf: "center",
    },
    btnContinuar: {
        marginTop: "170%",
        position: "absolute"
    }
})

export default IntroScreen;