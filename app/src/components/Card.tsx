import {StyleSheet, View} from "react-native";
import {Colors} from "@asset/styles/colors";
import React from "react";

interface Props {
  children: React.ReactNode
}

export const Card = (props: Props) => {
  const {children} = props;
  return (
    <View style={style.CardContainer}>
      {children}
    </View>
  )
}

const style = StyleSheet.create({
  CardContainer: {
    maxWidth: '100%',
    width: 326,
    height: 100,
    backgroundColor: Colors.white100,
    borderRadius: 10,
    marginVertical: 10,
  }
});
