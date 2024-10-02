import { useState } from "react";
import { Text, View , Modal, Button } from "react-native";


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
     <View style={{ backgroundColor : "red" , width : 100 , height : 80 , justifyContent : "center" }}> 
      <Text>Jaydip Dhananjay Jadhav </Text>
      
      <Button title="click" onPress={() => setvisiable(!visiable)}/>

     </View>


     {/* model */}

     <Modal  visible={visiable}  animationType="slide" 
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
         
        </Modal>
      

    </View>
  );
}
