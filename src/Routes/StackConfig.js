import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Home } from '../Screens/index';

const LoginStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Login" >
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Home" component={Home} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackScreen;