import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import GradientButton from "../../gradient/GradientButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../../types/rotas";




const ImpulsoScreen = ({ navigation }: NativeStackScreenProps<RootStack>) => {


    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Estou ansioso", isChecked: false, color: "#1B1B1B" },
        { id: 2, label: "Estou estressado", isChecked: false, color: "#1B1B1B" },
        { id: 3, label: "Estou triste", isChecked: false, color: "#1B1B1B" },
        { id: 4, label: "Estou bravo", isChecked: false, color: "#1B1B1B" },
        { id: 5, label: "Estou entediado", isChecked: false, color: "#1B1B1B" },
        { id: 6, label: "Propagandas", isChecked: false, color: "#1B1B1B" },
        { id: 7, label: "Hábito", isChecked: false, color: "#1B1B1B" },
        { id: 8, label: "Amigos/Família", isChecked: false, color: "#1B1B1B" },
        { id: 9, label: "Eu não sei", isChecked: false, color: "#1B1B1B" },
    ]);

    const toggleCheckbox = (id: number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) => ({
                ...checkbox,
                isChecked: checkbox.id === id
            }))
        );
    }



    return (
        <View>
            <Text>O que te fez querer apostar?</Text>
            <Text>Selecione uma ou mais opções.</Text>
            {checkboxes.map((checkboxes) => (
                <TouchableOpacity
                    key={checkboxes.id}
                    style={styles.checkboxContainer}
                    onPress={() => toggleCheckbox(checkboxes.id)}
                >
                    <MaterialCommunityIcons
                        name={checkboxes.isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                        size={24}
                        color={checkboxes.isChecked ? checkboxes.color : '#1B1B1B'}
                    />
                    <Text style={styles.checkboxText}>{checkboxes.label}</Text>
                </TouchableOpacity>
            ))}
            <GradientButton title="Confirmar" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        left: "2%",
        marginBottom: "5%",
    },
    checkboxText: {
        fontFamily: "Inter",
        fontSize: 16,
        color: "1B1B1B"
    },
})

export default ImpulsoScreen