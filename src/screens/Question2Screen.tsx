
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/rotas";



const Question2Screen = ({ navigation }: NativeStackScreenProps<RootStack,"Question2Screen"> ) => {

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Esportiva", isChecked: false, color: "#1B1B1B" },
        { id: 2, label: "Cassino online", isChecked: false, color: "#1B1B1B" },
    ]);

    const toggleCheckbox = (id: number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) => 
                checkbox.id === id ? {...checkbox, isChecked: !checkbox.isChecked} : checkbox
            )
        );
    }

    return (
        <View style={styles.container}>
                <Text style={styles.text}>Quais tipos de aposta você realiza?</Text>
                <Text style={styles.subText}>Selecione todas as opções que se aplicam.</Text>
                {checkboxes.map((checkboxes) => (
                    <TouchableOpacity
                        key={checkboxes.id}
                        style={styles.checkboxContainer}
                        onPress={() => toggleCheckbox(checkboxes.id)}
                    >
                        <MaterialCommunityIcons
                            name={checkboxes.isChecked ? 'checkbox-marked-outline': 'checkbox-blank-outline'}
                            size={24}
                            color={checkboxes.isChecked ? checkboxes.color : '#1B1B1B'}
                        />
                        <Text style={styles.checkboxText}>  {checkboxes.label}</Text>
                    </TouchableOpacity>
                ))}
                
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("Question3Screen")}><Text style={styles.textButton}>Próximo</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontFamily: "Patrick Hand",
        fontSize: 26,
        color: "1B1B1B",
        alignSelf: "center",
        top: "4%"
    },
    subText: {
        fontFamily: "Patrick Hand",
        fontSize: 17,
        color: "#929292",
        left: "12%",
        marginBottom: "15%",
        top: "4%"
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        left: "12%",
        marginBottom: "5%"
    },
    checkboxText: {
        fontFamily: "Patrick Hand",
        fontSize: 22,
        color: "1B1B1B"
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
        bottom: "15%"
    },
    textButton: {
        color: "#fff",
        fontSize: 22,
        fontFamily:"Patrick Hand"
    }
})

export default Question2Screen;