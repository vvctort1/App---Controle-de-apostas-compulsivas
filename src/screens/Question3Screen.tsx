
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStack } from "../types/rotas";



const Question3Screen = ({ navigation }: NativeStackScreenProps<RootStack, "Question3Screen">) => {

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Raramente", isChecked: false, color: "#1B1B1B" },
        { id: 2, label: "Algumas vezes por semana", isChecked: false, color: "#1B1B1B" },
        { id: 3, label: "Todos os dias", isChecked: false, color: "#1B1B1B" },
        { id: 4, label: "Prefiro não responder", isChecked: false, color: "#1B1B1B" }
    ]);

    const toggleCheckbox = (id: number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) => ({
                ...checkbox,
                isChecked: checkbox.id === id
            }))
        );
    }

    const [contador, setContador] = useState(0);

    const AddContador = (contador: number) => {
        contador++;
        setContador(contador);
    }

    const SubContador = (contador: number) => {
        if (contador > 0) {
            contador --;
            setContador(contador);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text}>Com que frequência você aposta</Text>
                <Text style={styles.text2}>atualmente?</Text>
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
                <Text style={styles.text3}>Nos dias que você aposta, quantas</Text>
                <Text style={styles.text}>apostas você realiza em média?</Text>
                <View style={styles.countContainer}>
                    <TouchableOpacity style={styles.countButton} onPress={() => SubContador(contador)}><Text style={styles.symbolCountButton}>—</Text></TouchableOpacity>
                    <Text style={styles.textCountButton}>{contador}</Text>
                    <TouchableOpacity style={styles.countButton} onPress={() => AddContador(contador)}><Text style={styles.symbolCountButton}>+</Text></TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Próximo</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container2:{
        top: "5%"
    },
    text: {
        fontFamily: "Patrick Hand",
        fontSize: 26,
        color: "1B1B1B",
        alignSelf: "center"
    },
    text2: {
        fontFamily: "Patrick Hand",
        fontSize: 26,
        color: "#1B1B1B",
        left: "15%",
        marginBottom: "10%"
    },
    text3:{
        fontFamily: "Patrick Hand",
        fontSize: 26,
        color: "#1B1B1B",
        alignSelf: "center",
        marginTop: "5%"
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        left: "12%",
        marginBottom: "5%",
    },
    checkboxText: {
        fontFamily: "Patrick Hand",
        fontSize: 22,
        color: "1B1B1B"
    },
    countContainer: {
        flexDirection: "row",
        marginTop: "13%",
        alignItems: "center",
        justifyContent: "center"
    },
    countButton: {
        borderWidth: 2,
        borderRadius: 50,
        width: 33,
        height: 32,
        alignItems: "center",
        justifyContent: "center"
    },
    textCountButton:{
        fontSize: 54,
        marginHorizontal: "15%",
        fontFamily: "Patrick Hand"
    },
    symbolCountButton: {
        fontWeight: "bold",
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

export default Question3Screen;