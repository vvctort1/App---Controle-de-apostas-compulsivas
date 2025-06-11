import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootBottomTabs } from "../types/rotas";
import MaterialTopTab from "./MaterialTopTab";
import AccountScreen from "../screens/telasDentroDoApp/AccountScreen";
import NotesScreen from "../screens/telasDentroDoApp/NotesScreen";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { faHome, faStickyNote, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRoute } from "@react-navigation/native";
import { User } from "../types/User";



const Tab = createBottomTabNavigator<RootBottomTabs>();

const BottomTabs = () => {

    const route = useRoute();
    const { user } = route.params as { user: User};

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{ flex: 1}}>
            <Modal animationType="fade" transparent={true} visible={modalVisible} navigationBarTranslucent={true} statusBarTranslucent={true}>
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
                tabBarLabelStyle: { fontFamily: "Patrick Hand", fontSize: 14 },
                tabBarActiveTintColor: "#1B1B1B",
            }}>
                <Tab.Screen name="Home" component={MaterialTopTab} initialParams={{user: user}} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHome} size={size} color={color} />
                    ),
                }} />
                <Tab.Screen name="Notes" component={NotesScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faStickyNote} size={size} color={color} />
                    ),
                }}/>
                <Tab.Screen name="Account" component={AccountScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faUser} size={size} color={color} />
                    ),
                }}/>
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