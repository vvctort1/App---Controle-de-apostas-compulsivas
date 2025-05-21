import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { RootStack } from "../types/rotas";



const ReadyScreen = ({ navigation }: NativeStackScreenProps<RootStack, "ReadyScreen">) => {


    return (
        <View style={{ flex: 1, alignItems: "center"}}>
            
            <Text style={styles.txt}>Tudo pronto! A partir de agora,{'\n'} estamos aqui com você a cada{'\n'} passo. Um dia de cada vez.</Text>
            <Image source={require("../Images/forest.gif")} style={styles.img} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BottomT")}><Text style={styles.textButton}>Ir para o app</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    txt: {
        fontFamily: "Patrick Hand",
        fontSize: 22,
        marginTop: "58%",
        marginBottom: "14%",
    },
    img: {
        width: 247,
        height: 246,
        borderRadius: 2,
        alignSelf: "center",
        marginBottom: "20%"
    },
    button: {
        backgroundColor: "#1B1B1B",
        borderRadius: 8,
        height: 52,
        width: 278,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "15%"
    },
    textButton: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Patrick Hand"
    },
})

export default ReadyScreen;