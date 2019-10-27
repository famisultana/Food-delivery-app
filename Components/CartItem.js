import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../utilities/colors";

const CartItem = () => {
  return (
    <View style={{ flexDirection: "row", margin: 5 }}>
      <View style={{ marginLeft: 2, marginRight: 10 }}>
        <Text style={{ fontSize: 15 }}>
          {""}
          <Icon name="plus-circle" color={colors.primary} size={20}></Icon> 2
          {"  "}
          <Icon name="minus-circle" color={colors.primary} size={20}></Icon>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={{ color: colors.font, fontSize: 16 }}>Burger</Text>

        <Text style={{ color: colors.font, fontSize: 16 }}>Rs. 300</Text>
      </View>
    </View>
  );
};

export default CartItem;
