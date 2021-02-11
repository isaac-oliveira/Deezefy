import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { color, image } from "../themes";

const CheckBox = ({ title, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    onChange(isChecked);
  }, [isChecked]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleCheckBox}>
        <Image
          source={isChecked ? image.checked : image.unchecked}
          style={styles.box}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: color.roxo,
    width: "75%",
    alignItems: "center",
    marginVertical: 23,
  },
  box: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: color.branco,
  },
});
