import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RootStack } from "../../types/rotas";
import GradientWord from "../../gradient/GradientWord";
import GradientButton from "../../gradient/GradientButton";



const ReadyScreen = ({ navigation, route }: NativeStackScreenProps<RootStack, "ReadyScreen">) => {
    const { user } = route.params;

    return (
        <View style={{ flex: 1, alignItems: "center"}}>
            <Image source={require("../../Images/logo.png")} style={styles.img}/>
            <View style={styles.viewGradient}>
                <GradientWord style={styles.txt}>TUDO PRONTO!</GradientWord>
                <Text style={styles.txt}> A PARTIR DE</Text>
            </View>
            <View style={styles.viewGradient}>
                <Text style={styles.txt}>AGORA, </Text>
                <GradientWord style={styles.txt}>ESTAMOS AQUI COM</GradientWord>
            </View>
            <View style={styles.viewGradient}>
                <GradientWord style={styles.txt}>VOCÊ </GradientWord>
                <Text style={styles.txt}>A CADA PASSO, UM DIA</Text>
            </View>
            <Text style={styles.txt}>DE CADA VEZ.</Text>
            <Image source={require("../../Images/botas.png")} style={styles.img1} />
            <GradientButton title="Ir para o app" onPress={() => navigation.navigate("BottomT", {user: user})} style={styles.btn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    txt: {
        fontFamily: "Inter",
        fontSize: 19,
        fontWeight: 800,
    },
    img: {
        marginTop: "25%",
        marginBottom: "25%"
    },
    viewGradient: {
        flexDirection: "row"
    },
    img1: {
        width: "40%",
        height: "40%",
        alignSelf: "center",
    },
    btn:{
        position: "absolute",
        marginTop: "175%"
    }
})

export default ReadyScreen;