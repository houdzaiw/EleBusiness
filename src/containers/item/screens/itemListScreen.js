import React,{ Component } from 'react'
import {
    Text,
    ScrollView,
    View,
} from 'react-native'

class itemListScreen extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        title: '条款页',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        return(
            <View style = {{backgroundColor:'cyan',flex:1}}>
                <Text>hello world</Text>
            </View>
        )
    }
}
export default itemListScreen;