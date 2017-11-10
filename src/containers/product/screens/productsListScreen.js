import React,{ Component } from 'react'
import {
    Text,
    ScrollView,
    View,
} from 'react-native'

class productsListScreen extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        title: '产品',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        return(
            <View style = {{backgroundColor:'#2c6',flex:1}}>
                <Text>hello world</Text>
            </View>
        )
    }
}
export default productsListScreen;