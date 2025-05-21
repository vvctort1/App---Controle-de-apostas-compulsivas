import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootBottomTabs } from "../types/rotas";
import MaterialTopTab from "./MaterialTopTab";
import AccountScreen from "../screens/AccountScreen";
import ProgressScreen from "../screens/ProgressScreen";
import NotesScreen from "../screens/NotesScreen";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useState } from "react";



const Tab = createBottomTabNavigator<RootBottomTabs>();

const BottomTabs = () => {

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{ flex: 1 }}>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja receber lembretes e dicas{'\n'}para te ajudar nos momentos mais{'\n'}difíceis?</Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.buttonModalNo} 
                                onPress={() => setModalVisible(!modalVisible)}>
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
            <Tab.Navigator screenOptions={{
                headerTitle: "",
                tabBarLabelStyle: {fontFamily: "Patrick Hand", fontSize: 14},
                tabBarActiveTintColor: "#1B1B1B",
            }}>
                <Tab.Screen name="Home" component={MaterialTopTab} />
                <Tab.Screen name="Progress" component={ProgressScreen} />
                <Tab.Screen name="Notes" component={NotesScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator>
        </View>

    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.5)",
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
            width: 30,
            height: 40,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 100,
        borderWidth: 2
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
})

export default BottomTabs;