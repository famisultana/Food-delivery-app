import React, { Component } from "react";
import { Text, View } from "react-native";

export default class ContactDetailCard extends Component {
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
          backgroundColor: "white",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "grey",
          padding: 5,
          ...this.props.style
        }}
      >
        {this.Listitem("Contact info", "03038313255")}
        {this.Listitem("Delivery details", "Current Location")}
        {this.Listitem("Delivery Time", "ASAP")}
      </View>
    );
  }
}
