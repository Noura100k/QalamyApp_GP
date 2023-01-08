import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";




export default function CanvaDelete({ onOK })
{   const ref = useRef();

    const handleClear = () => {
        ref.current.clearSignature();
        
      };

  return(
    <View style={styles_container_Delete.Delete}>
    <Button title="Clear" onPress={handleClear}  />
    </View>

    );
}
const styles_container_Delete = StyleSheet.create({

    Delete: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
  });