import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInputTexText,
  Button,
  TouchableOpacity,
} from "react-native";
 

// import ellipse3 from "./assets/ellipse3.svg";
// import ellipse5 from "./assets/ellipse5.svg";
// import ellipse2 from "./assets/ellipse2.svg";
// import gamepadLight from "./assets/gamepadLight.svg";
// import ellipse4 from "./assets/ellipse4.svg";
const App = () => {
  return (
    <View style={styles.androidLarge1}>
      <View className="flex-container">
        <Image className="ellipse-2" src={ellipse2} />
        <Image className="ellipse-5" src={ellipse5} />
        <Image className="gamepad-light" src={gamepadLight} />
        <View className="rectangle-1">
          <InputText className="rectangle-4" placeholder="E-mail" type="text" />
          <InputTex className="rectangle-5" placeholder="Password" type="text" />
          <Button className="rectangle-3">
            <Text className="insert-name">Log in</Text>
          </Button>
        </View>
      </View>
      <Text className="or">or</Text>
      <Button className="rectangle-3978">
        <Text className="register">Register</Text>
      </Button>
      <View className="flex-container-1">
        <Image className="ellipse-4" src={ellipse4} />
        <Image className="ellipse-3" src={ellipse3} />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  androidLarge1 : {
    color: "#000",
    textAlign: "center",
    width: "100%",
    height: "100%",
    backgroundColor:"#e3e5ef",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Sedan",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "22px",
    display: "flex",
  }
})


// .flex-container {
//   width: 100%;
//   flex-direction: row;
//   flex-basis: 51%;
//   justify-content: flex-start;
//   align-self: flex-start;
//   align-items: stretch;
//   margin-bottom: 12px;
//   margin-right: 13px;
//   display: flex;
// }

// .ellipse-2 {
//   width: 57px;
//   height: 258px;
//   object-fit: cover;
//   border: 1.5px solid #727efd;
//   margin-right: 59px;
// }

// .ellipse-5 {
//   width: 128px;
//   height: 128px;
//   object-fit: cover;
//   margin-top: 32px;
//   margin-right: -215px;
//   padding-bottom: 80px;
//   padding-left: 40px;
// }

// .gamepad-light {
//   width: 70px;
//   height: 70px;
//   object-fit: cover;
//   margin-top: 59px;
//   margin-left: 116px;
//   margin-right: -226px;
// }

// .rectangle-1 {
//   height: 55%;
//   background-color: #727efd;
//   border-radius: 10px;
//   flex-direction: column;
//   flex-basis: 95%;
//   justify-content: space-evenly;
//   align-self: flex-end;
//   align-items: center;
//   margin-top: 2px;
//   margin-left: 29px;
//   padding-top: 12px;
//   padding-left: 7px;
//   padding-right: 7px;
//   display: flex;
// }

// .rectangle-4 {
//   color: #000;
//   width: 90%;
//   background-color: #fbfbfc;
//   border: none;
//   border-radius: 10px;
//   flex-direction: row;
//   flex-basis: 19%;
//   justify-content: flex-start;
//   align-items: stretch;
//   margin-top: 2px;
//   font-family: Sedan;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 22px;
//   display: flex;
// }

// .rectangle-5 {
//   color: #000;
//   width: 90%;
//   background-color: #fbfbfc;
//   border: none;
//   border-radius: 10px;
//   flex-direction: row;
//   flex-basis: 19%;
//   justify-content: flex-start;
//   align-items: stretch;
//   margin-bottom: 5px;
//   font-family: Sedan;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 22px;
//   display: flex;
// }

// .rectangle-3 {
//   color: #000;
//   text-align: center;
//   width: 55%;
//   background-color: #fbfbfc80;
//   border: none;
//   border-radius: 10px;
//   flex-direction: row;
//   flex-basis: 19%;
//   justify-content: center;
//   align-items: center;
//   padding-top: 3px;
//   padding-left: 1px;
//   font-family: Sedan;
//   font-size: 1.5rem;
//   font-weight: 400;
//   line-height: 33px;
//   display: flex;
// }

// .insert-name {
//   margin-top: 1px;
//   margin-left: 1px;
// }

// .or {
//   margin-bottom: 10px;
//   margin-left: 2px;
// }

// .rectangle-3978 {
//   color: #000;
//   text-align: center;
//   width: 65%;
//   background-color: #fff;
//   border: none;
//   border-radius: 10px;
//   flex-direction: row;
//   flex-basis: 6%;
//   justify-content: center;
//   align-items: center;
//   margin-left: 13px;
//   padding-top: 1px;
//   font-family: Sedan;
//   font-size: 1.5rem;
//   font-weight: 400;
//   line-height: 33px;
//   display: flex;
// }

// .register {
//   margin-top: 1px;
// }

// .flex-container-1 {
//   width: 55%;
//   flex-direction: row;
//   justify-content: space-between;
//   align-self: flex-end;
//   align-items: flex-end;
//   margin-left: 5px;
//   display: flex;
// }

// .ellipse-4 {
//   width: 193px;
//   height: 195px;
//   object-fit: cover;
//   border: 1px solid #68d9e1;
// }

// .ellipse-3 {
//   width: 172px;
//   height: 175px;
//   object-fit: cover;
//   border: 1.5px solid #fbfbfc;
// }