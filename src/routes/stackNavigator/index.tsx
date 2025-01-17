import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../types/TNavigation';
import LoginController from '../../controllers/logginController';
import HomeController from '../../controllers/homeController';
import ModelController from '../../controllers/modelController';

  
const Stack = createNativeStackNavigator<StackNavigatorParamList>();
  
export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginController} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={HomeController} options={{headerShown: false}}/>
      <Stack.Screen name="Model" component={ModelController} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}