import React from 'react'
import {View, Text, Button} from 'react-native'


const Home = ({navigation}) => {
    return(
        <View style = { styles.mainViewStyle }>
            <Text style = { styles.textView }>Home Screen</Text>
        
            <View style= { styles.buttonView }>
                <Button
                    title= "Go to Details Screen"
                    onPress={() => navigation.navigate('Details')}/>
            </View>
          
            <View style= { styles.buttonView }>
                <Button
                    title= "Go to Favorite Screen"
                    onPress={() => navigation.navigate('Favorite')}/>
            </View>

            <View style= { styles.buttonView }>
                <Button
                    title= "Go to Favorite Screen"
                    onPress={() => navigation.navigate('Settings')}/>
            </View>
        </View>
    )
}

const styles = {
    textView: {
        fontSize:30,
        color:'blue'
    },
    mainViewStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        marginVertical: 10
    }

}

export default Home;