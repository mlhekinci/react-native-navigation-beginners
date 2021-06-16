import React from 'react'
import {View, Text, Button} from 'react-native'


const Favorite = () => {
    return(
        <View style={ styles.mainViewStyle }>
            <Text style={ styles.textView }>Favorite Screeen</Text>
        </View>
    )
}

const styles = {
    textView: {
        fontSize:30,
        color:'orange'
    },
    mainViewStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  }

export default Favorite;