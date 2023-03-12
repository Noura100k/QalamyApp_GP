import { StatusBar } from 'expo-status-bar';
import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";import SignatureScreen from "react-native-signature-canvas";
import * as FileSystem from "expo-file-system";



export default function canav({ onOK,text }) {
  const ref = useRef();
  
  const handleOK = (signature) => {
    const path = FileSystem.documentDirectory + "sign.png";    FileSystem.writeAsStringAsync(
      path,
      signature.replace("data:image/png;base64,", ""),
      { encoding: FileSystem.EncodingType.Base64 }
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then(console.log)
      .catch(console.error);    //onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };
  const creatSig=()=>{



  };
  const imgWidth = 256;
  const imgHeight = 256;
  const style = `.m-signature-pad {box-shadow: none; border: none; } 
  .m-signature-pad--body {border: none;}
  .m-signature-pad--footer {display: none; margin: 0px;}
  body,html {
  width: ${imgWidth}px; height: ${imgHeight}px;}`;  return (
    <View style={styles.container}>
 <View style={{ width: imgWidth, height: imgHeight }}>
  <SignatureScreen
    ref={ref}
    overlaySrc="http://pngimg.com/uploads/circle/circle_PNG63.png"
    overlayWidth={imgWidth}
    overlayHeight={imgHeight}
    webStyle={style}
    onOK={handleOK}
  />
  
</View>
    <View style={styles.row}>
      <Button title="Clear" onPress={handleClear}  />
      <Button title="Confirm" onPress={handleConfirm}  />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});