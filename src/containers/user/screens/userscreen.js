import React,{ Component } from 'react'
import {
    Text,
    ScrollView,
    View,
} from 'react-native'

class userscreen extends Component {
    constructor(props){
        super(props)

    }
    // static navigationOptions = {
    //     title: '我的',
    //     headerStyle:{backgroundColor:'red'}
    // };


    render(){
        return(
            <View style = {{backgroundColor:'#efc',flex:1}}>
                <Text>hello world</Text>
            </View>
        )
    }
}
export default userscreen;