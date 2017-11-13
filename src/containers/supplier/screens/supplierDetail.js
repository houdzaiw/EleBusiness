import React,{ Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

class supplierDetail extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        headerTitle:'供应商详情',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        return(
            <View style = {{backgroundColor:'green',flex:1}}>
                <Text>hello world</Text>
            </View>
        )
    }
}
export default supplierDetail;