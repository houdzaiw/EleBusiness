import React,{ Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

class companyDetailScreen extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        headerTitle:'厂商详情',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        return(
            <View style = {{backgroundColor:'yellow',flex:1}}>
                <Text>hello world ，my is supplier</Text>
            </View>
        )
    }
}
export default companyDetailScreen;