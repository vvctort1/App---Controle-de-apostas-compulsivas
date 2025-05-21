import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RootTopTabs } from "../types/rotas";
import SummaryScreen from "../screens/SummaryScreen";
import CalendarScreen from "../screens/CalendarScreen";
import SavingsScreen from "../screens/SavingsScreen";
import UrgesScreen from "../screens/UrgesScreen";
import {View } from "react-native";


const TopTab = createMaterialTopTabNavigator<RootTopTabs>();


const MaterialTopTab = () => {

    return (
        <View style={{ flex: 1 }}>
            <TopTab.Navigator initialRouteName="Summary" screenOptions={{
                tabBarLabelStyle: { fontFamily: "Patrick Hand", fontSize: 15, color: "1B1B1B" },
                tabBarIndicatorStyle: { backgroundColor: "#1B1B1B", height: 3, width: 55, marginLeft: '6%' },
                tabBarStyle: { backgroundColor: "transparent", elevation: 0 }
            }}>
                <TopTab.Screen name="Summary" component={SummaryScreen} />
                <TopTab.Screen name="Calendar" component={CalendarScreen} />
                <TopTab.Screen name="Savings" component={SavingsScreen} />
                <TopTab.Screen name="Urges" component={UrgesScreen} />
            </TopTab.Navigator>
        </View>

    )
}



export default MaterialTopTab;