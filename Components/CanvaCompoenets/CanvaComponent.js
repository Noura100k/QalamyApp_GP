import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";import SignatureScreen from "react-native-signature-canvas";
import * as FileSystem from "expo-file-system";



export default function Exam_word({ onOK, width, hight }) {
  const ref = useRef();
  
  const handleOK = (signature) => {
    const path = FileSystem.cacheDirectory + "sign.png";
  FileSystem.writeAsStringAsync(
    path,
    signature.replace("data:image/png;base64,", ""),
    { encoding: FileSystem.EncodingType.Base64 }
  )
    .then(() => FileSystem.getInfoAsync(path))
    .then(console.log)
    .catch(console.error);
  };


const imgWidth = width;
const imgHeight = hight;
const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
                maxWidth: ${imgWidth}px; maxHeight: ${imgHeight}px;}`;

  return (

    <View style={{ width: imgWidth, height: imgHeight , borderColor: "#000000", borderWidth: 0.5}}>
    <SignatureScreen
      ref={ref}
      overlaySrc="https://i.ibb.co/QdKV7rd"
      overlayWidth={imgWidth}
      overlayHeight={imgHeight}
      webStyle={style}
      onOK={handleOK}
    />
    
  </View>
  );
}


