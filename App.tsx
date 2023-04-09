




import React from 'react';
import { View,Text,Animated,StyleSheet } from 'react-native';


const Box = () => {
  const boxRef = React.useRef(new Animated.Value(1)).current

  const onMouseEnter = () => {
    Animated.spring(boxRef,{
      useNativeDriver: true,
      toValue: 1.3
    }).start()
  }
  const onMouseLeave = () => {
    Animated.spring(boxRef,{
      useNativeDriver: true,
      toValue: 1
    }).start()
  }

  return (
    <Animated.View 
      //@ts-ignore
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={[
        styles.box,
        {
          transform:[{scale: boxRef}]
        }
      ]}
    />
  )
}


export default function Animationsample() {
  return (
    <View style={styles.container}>
      <Box/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box:{
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "blueviolet",
  }
})