import React,{ Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

class supplierlistscreen extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        headerTitle:'供应商',
        headerBackTitle:null,
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        return(
            <View style = {{backgroundColor:'yellow',flex:1}}>
                <Text>hello world</Text>
            </View>
        )
    }
}
export default supplierlistscreen;