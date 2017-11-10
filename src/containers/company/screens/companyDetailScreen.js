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
export default companyDetailScreen;