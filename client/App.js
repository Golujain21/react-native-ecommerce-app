import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Login from "./screens/auth/Login";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
