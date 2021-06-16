import React from 'react'
import { View, Text } from 'react-native'


const Settings = () => {
    return(
        <View style={ styles.mainViewStyle }>
            <Text style={ styles.textView }>Settings Screeen</Text>
        </View>
    )
}

const styles = {
    textView: {
        fontSize:30,
        color:'grey'
    },
    mainViewStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  }

export default Settings;

