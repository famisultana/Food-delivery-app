import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import CartCard from "../Components/CartCard";
import ContactDetailCard from "../Components/ContactDetailCard.js";

import colors from "../utilities/colors";

export default class Cart extends Component {
  PlaceOrderButton = () => {
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 10,
          borderRadius: 5,
          marginTop: 10
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            alignSelf: "center"
          }}
        >
          Place Order
        </Text>
      </View>
    );
  };

  StaticTerms = () => {
    return (
      <View>
        <Text style={{ marginTop: 10 }}>
          By completing this order, I agree to all Terms and Conditions
        </Text>
        <Text>Please Note: You Cannot Cencel the order</Text>
        <Text style={{ fontWeight: "bold", marginTop: 10 }}>
          I agree and i demand that you execute the order service before the end
          of revocation period. I am aware that after complete fullfillment of
          the service I lose the right of rescisssion.
        </Text>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: colors.backgroundColor,
          flex: 1
        }}
      >
        <CartCard></CartCard>
        <ContactDetailCard style={{ marginTop: 10 }}></ContactDetailCard>
        {this.PlaceOrderButton()}
        {this.StaticTerms()}
      </ScrollView>
    );
  }
}
