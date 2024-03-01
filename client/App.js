import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Login from "./screens/auth/Login";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Payments from "./screens/Payments";
import Register from "./screens/auth/Register";
import Account from "./screens/Account/Account";
import MyOrders from "./screens/Account/MyOrders";
import Notifications from "./screens/Account/Notifications";
import Profile from "./screens/Account/Profile";
import Dashboard from "./screens/Admin/Dashboard";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="account">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="payments" component={Payments} />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="myorders" component={MyOrders} />
        <Stack.Screen name="notifications" component={Notifications} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="adminPanel" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
