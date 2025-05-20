import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { RootStack } from "../types/rotas";



const ReadyScreen = ({ navigation }: NativeStackScreenProps<RootStack, "ReadyScreen">) => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: modalVisible ? "rgba(0,0,0,0.5)" : "#fff" }}>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja receber lembretes e dicas{'\n'}para te ajudar nos momentos mais{'\n'}difíceis?</Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.buttonModalNo}
                                onPress={() => navigation.goBack()}>
                                <Text style={styles.txtModalButtonNo}>Agora não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonModalYes}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.txtModalButtonYes}>Quero receber</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            <Text style={styles.txt}>Tudo pronto! A partir de agora,{'\n'} estamos aqui com você a cada{'\n'} passo. Um dia de cada vez.</Text>
            <Image source={require("../Images/forest.gif")} style={styles.img} />
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}><Text style={styles.textButton}>Ir para o app</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: "80%",
        height: "30%",
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 20,
            height: 40,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 100,
    },
    modalText: {
        fontFamily: "Patrick Hand",
        fontSize: 20
    },

    modalButtonContainer: {
        flexDirection: "row",
        marginTop: "25%"
    },
    buttonModalNo: {
        borderRadius: 8,
        padding: 10,
        elevation: 6,
        backgroundColor: '#fff',
        marginHorizontal: "5%"
    },
    txtModalButtonNo: {
        color: "#1B1B1B"
    },
    buttonModalYes: {
        borderRadius: 8,
        padding: 10,
        elevation: 6,
        backgroundColor: '#1B1B1B',
        marginHorizontal: "5%"
    },
    txtModalButtonYes: {
        color: "#fff"
    },
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