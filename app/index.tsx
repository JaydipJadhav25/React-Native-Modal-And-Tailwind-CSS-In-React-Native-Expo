import { useState } from "react";
import { Text, View , Modal, Button } from "react-native";


export default function Index() {

 const[visiable , setvisiable] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        justifyContent : "center",
        alignItems : "center"

      }}
    >
      <Button title="click" onPress={() => setvisiable(!visiable)}/>
      
      <Modal visible={visiable}
      style={{
        backgroundColor : "yellow"
      }}
      animationType="slide"
      >

        <View style={{
          // backgroundColor : "red",
          width  :500,
          height : 300,
          flex :1,
          justifyContent : 'flex-end',
          gap : 20
        }}>

      <Button title="click" onPress={() => setvisiable(!visiable)}/>

          <View
          style ={{
            backgroundColor : "blue",
            width  :500,
            height : 300,
            // margin : 60,
            borderRadius : 50
            
          }}
          />
        </View>
      </Modal>
    </View>
  );
}
