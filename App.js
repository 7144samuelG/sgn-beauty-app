import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import {
  Body,
  Cart,
  CheckOut,
  Detail,
  FaceOil,
  Hair,
  Home,
  Login,
  Profile,
  Register,
  Search,
  Skin,
  Welcome1,
  Payment,
  PayPalComponent,
  OrderPage,
  ConfirmOrdre
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { AuthContextProvider } from "./authContext";
const Stack = createNativeStackNavigator();
const KEY =
  "pk_test_51Np3NSKkDPUMN62jF8WPZHCfA5E3hsuit9FsaA6cLgYQsMhZbKTTqcw4a81b0m6Q4Qm0rw6QIUei8i9aOb8XsEUE00YvwEB4ko";
const App = () => {
  return (
  
    <NavigationContainer>
      <Provider store={store}>
        <StripeProvider>
       
          <Stack.Navigator>
            <Stack.Screen
              name="welcome"
              component={Welcome1}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Face"
              component={FaceOil}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Skin"
              component={Skin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Body"
              component={Body}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Hair"
              component={Hair}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CheckOut"
              component={CheckOut}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="Payment"
              component={Payment}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Order"
              component={OrderPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Confirm"
              component={ConfirmOrdre}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          
        </StripeProvider>
      </Provider>
    </NavigationContainer>
    
  );
};

export default App;
