
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../../types/rotas";
import GradientButton from "../../gradient/GradientButton";



const Question1Screen = ({ navigation, route }: NativeStackScreenProps<RootStack, "Question1Screen">) => {

    const { user } = route.params;

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Observar meus hábitos", isChecked: false, color: "#1B1B1B" },
        { id: 2, label: "Reduzir frequência em apostas", isChecked: false, color: "#1B1B1B" },
        { id: 3, label: "Parar completamente de apostar", isChecked: false, color: "#1B1B1B" },
        { id: 4, label: "Parar completamente de apostar", isChecked: false, color: "#1B1B1B" }
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
        <View style={styles.container}>
                <Text style={styles.text}>Qual é o seu objetivo com este app?</Text>
                <Text style={styles.subText}>Selecione uma das opções abaixo.</Text>
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
            <GradientButton title="Continuar" onPress={() => navigation.navigate("Question2Screen", {user:user})} style={styles.btnContinuar}/>
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
    btnContinuar: {
        width: "85%",
        marginTop: "144%",
        position: "absolute",

    }
})

export default Question1Screen;