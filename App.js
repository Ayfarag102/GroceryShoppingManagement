import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemImageUrl, setItemImageUrl] = useState("");
  const [tempItemList, setTempItemList] = useState([]);
  return (
    <SafeAreaView>
      <Text>Personal Grocery Shopping Management App 🛒</Text>
      <TouchableOpacity>
        <Text>Create Grocery List 💹</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Your Current Groceries</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Completed/Past Groceries</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
