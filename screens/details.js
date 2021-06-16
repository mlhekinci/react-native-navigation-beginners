import React from 'react'
import {View, Text} from 'react-native'

const Details = () => {
    return (
        <View style={ styles.mainViewStyle }>
          <Text style= { styles.textView }>Detail Screen</Text>
        </View>
      );
}

const styles = {
  textView: {
      fontSize:30,
      color:'red'
  },
  mainViewStyle: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
  }
}

export default Details;