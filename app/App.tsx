import "react-native-gesture-handler"

//Importing All Screens
import Onboarding from "./screens/Onboarding/Onboarding";
import Auth from "./screens/Auth/Auth";

//Navigation
import {NavigationContainer} from "@react-navigation/native"
//stacks
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack"
import {StatusBar} from "expo-status-bar"
import DrawerStack from "./screens/Chat/Stack/Drawer";
const Stack=createStackNavigator()
export default function App() {
  return (
     <NavigationContainer>
      <StatusBar style="auto"/>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} name="Onboarding" component={Onboarding}/> 
        <Stack.Screen options={{headerShown:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} name="Auth" component={Auth}/>
        <Stack.Screen options={{headerShown:false,cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} name="Stack" component={DrawerStack}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}

