import { useState } from "react";
import { Text, View ,  Button } from "react-native";
import {ReactNativeModal} from "react-native-modal";

export default function Index() {

 const[visiable , setvisiable] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor  : "yellow"

      }}
    >
     {/* <View style={{ backgroundColor : "red" , width : 100 , height : 80 , justifyContent : "center" }}> 
      <Text>Jaydip Dhananjay Jadhav </Text>
      
      <Button title="click" onPress={() => setvisiable(!visiable)}/>

     </View> */}


     {/* model */}

     {/* <Modal  visible={visiable}  animationType="slide" 
    //  transparent
      >

       <View
        style={{
          flex: 1,
          justifyContent : "center",
          alignItems : "center",
          backgroundColor  : "orange"
  
        }}
       >
       <View style={{ backgroundColor : "green" , width : 200 , height : 80 , justifyContent : "center" }}> 
      <Text>Welcome </Text>
      
      <Button title="click" onPress={() => setvisiable(!visiable)}/>

     </View>
       </View>
         
        </Modal> */}
      


       {/* use react-native-modal */}

       <Text className="bg-black text-yellow-500" 
      //  style={{
      //   backgroundColor : "green"
      //  }}
       >Jaydip Dhananjay Jadhav</Text>

      <Button title="click" onPress={() => setvisiable(!visiable)}/>
        
      <ReactNativeModal isVisible={visiable} 
      animationIn={"shake"}
      animationOut={"flash"}
      animationInTiming={900}
      animationOutTiming={900}
      style={{
        // flex : 1,
        backgroundColor : "red"
      }}
      onBackdropPress={() => setvisiable(!visiable)}
      >
        
        <View
        style={{
          height : 300,
          width : 500,
           backgroundColor : "green",
           borderRadius : 50,
           justifyContent : "center",
           alignItems : "center"


        }}
        >

      <Button title="click" onPress={() => setvisiable(!visiable)}/>

        <View
        style={{
          backgroundColor : "black",
          width : 300,
          height : 200,
        
        }}
        />

        </View>

      </ReactNativeModal>  






    </View>
  );
}
