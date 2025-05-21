import { createStackNavigator } from "@react-navigation/stack";
import { RootStack } from "../types/rotas";
import FirstScreen from "../screens/FirstScreen";
import CadastroScreen from "../screens/CadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import IntroScreen from "../screens/IntroScreen";
import Question1Screen from "../screens/Question1Screen";
import Question2Screen from "../screens/Question2Screen";
import Question3Screen from "../screens/Question3Screen";
import Question4Screen from "../screens/Question4Screen";
import Question5Screen from "../screens/Question5Screen";
import ReadyScreen from "../screens/ReadyScreen";
import BottomTabs from "./BottomTabs";



const InternalStack = createStackNavigator<RootStack>()

const Stack = () => {
    return(
        <InternalStack.Navigator 
        initialRouteName="BottomT"
        >
        <InternalStack.Screen name="FirstScreen" component={FirstScreen} options={
          {headerShown: false}
        }/>
        <InternalStack.Screen name="CadastroScreen" component={CadastroScreen} options={
          {headerShown: false}
        }/>
        <InternalStack.Screen name="LoginScreen" component={LoginScreen} options={
          {headerShown: false}
        }/>
        <InternalStack.Screen name="IntroScreen" component={IntroScreen}options={
          {headerShown: false}
        }/>
        <InternalStack.Screen name="Question1Screen" component={Question1Screen} options={{
          title: ""
        }}/>
        <InternalStack.Screen name="Question2Screen" component={Question2Screen} options={{
          title: ""
        }}/>
        <InternalStack.Screen name="Question3Screen" component={Question3Screen} options={{
          title: ""
        }}/>
        <InternalStack.Screen name="Question4Screen" component={Question4Screen} options={{
          title: ""
        }}/>
        <InternalStack.Screen name="Question5Screen" component={Question5Screen} options={{
          title: ""
        }}/>
        <InternalStack.Screen name="ReadyScreen" component={ReadyScreen} options={{
          headerShown: false
        }}/>
        <InternalStack.Screen name="BottomT" component={BottomTabs} options={{
          headerShown: false
        }}/>
      </InternalStack.Navigator>
    )
}

export default Stack;