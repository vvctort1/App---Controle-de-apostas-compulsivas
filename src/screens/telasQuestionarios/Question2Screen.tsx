
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../../types/rotas";
import GradientButton from "../../gradient/GradientButton";



const Question2Screen = ({ navigation, route }: NativeStackScreenProps<RootStack,"Question2Screen"> ) => {

    const { user } = route.params;

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
                
            <GradientButton title="Continuar" onPress={() => navigation.navigate("Question3Screen", {user:user})} style={styles.btnContinuar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        fontFamily: "Inter",
        fontSize: 19,
        color: "1B1B1B",
        alignSelf: "center",
        top: "4%"
    },
    subText: {
        fontFamily: "Inter",
        fontSize: 15,
        color: "#929292",
        left: "12%",
        marginBottom: "20%",
        top: "5%"
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        left: "12%",
        marginBottom: "5%"
    },
    checkboxText: {
        fontFamily: "Inter",
        fontSize: 18,
        color: "1B1B1B"
    },
    btnContinuar: {
        width: "75%",
        marginTop: "144%",
        position: "absolute",

    }
})

export default Question2Screen;