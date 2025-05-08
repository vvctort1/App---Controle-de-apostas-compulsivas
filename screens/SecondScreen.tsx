import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RootStack } from "../types/rotas";

const SecondScreen = ({ navigation }: NativeStackScreenProps<RootStack,"SecondScreen">) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.appName}>AppName</Text>
            </View>
            <Text style={styles.text1}>Lorem ipsum dolor et nam sit</Text>
            <Text style={styles.text2}>Elit ut et dienet</Text>
            <TextInput style={styles.textInputs} placeholder="Lorem ipsum"/>
            <TextInput style={styles.textInputs} placeholder="Lorem ipsum"/>
            <TextInput style={styles.textInputs} placeholder="Lorem ipsum"/>
            <TextInput style={styles.textInputs} placeholder="Lorem ipsum"/>
            <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("ThirdScreen")}><Text style={styles.textButton1}>Press</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=> navigation.goBack()}><Text style={styles.textButton2}>Button</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEE",
    },
    container1: {
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
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
        top: "17%",
        alignItems: "center",
        justifyContent: "center",
    },
    appName: {
        fontFamily:"Patrick Hand",
        fontSize: 22
    },
    text1: {
        fontSize: 24,
        fontFamily:"Patrick Hand",
        marginHorizontal: "7%",
    },
    text2: {
        fontSize: 24,
        fontFamily:"Patrick Hand",
        marginHorizontal: "7%",
        marginBottom: "5%"
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
    }
})

export default SecondScreen;