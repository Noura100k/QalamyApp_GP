import React, { useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import * as FileSystem from "expo-file-system";



export default function CanvaComp() {

    const imgWidth = 256;
    const imgHeight = 256;
    const style = `.m-signature-pad {box-shadow: none; border: none; } 
    .m-signature-pad--body {border: none;}
    .m-signature-pad--footer {display: none; margin: 0px;}
    body,html {
    width: ${imgWidth}px; height: ${imgHeight}px;}`; 
  return (
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
   
  );
}


