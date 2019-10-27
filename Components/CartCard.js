import React, { Component } from "react";
import { Text, View } from "react-native";
import CartItem from "./CartItem";
import colors from "../utilities/colors";

export default class Cart extends Component {
  Listitem = (name, value, style = {}) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 5
        }}
      >
        <Text style={{ color: colors.font, fontSize: 16, ...style }}>
          {name}
        </Text>
        <Text style={{ color: colors.font, fontSize: 16, ...style }}>
          {value}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          borderWidth: 1,
          backgroundColor: "white",
          padding: 5,
          borderColor: "grey",
          borderRadius: 5
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "grey"
          }}
        >
          {/* //cart item */}
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </View>

        {this.Listitem("Subtotal", "1900")}
        {this.Listitem("Delivery", "100")}
        <View style={{ borderTopWidth: 1, borderColor: "grey" }}>
          {this.Listitem("Total", "2000", {
            color: "black",
            fontWeight: "bold"
          })}
        </View>
        {/* <View style={{ borderWidth: 1 }}></View> */}
      </View>
    );
  }
}
