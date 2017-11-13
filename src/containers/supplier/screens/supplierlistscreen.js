import React,{ Component } from 'react'
import {
    Button,
    View,
} from 'react-native'

class supplierlistscreen extends Component {
    constructor(props){
        super(props)

    }
    static navigationOptions = {
        headerTitle:'供应商',
        headerBackTitle:'返回',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    render(){
        const {navigate} = this.props.navigation;
        console.log('navigate ----------->',navigate);
        return(
            <View style = {{backgroundColor:'yellow',flex:1}}>
                <Button
                    onPress={() => navigate('SupplierDetail', {name: 'Brent'})}
                    title={'跳到详情页'}
                />
            </View>
        )
    }
}
export default supplierlistscreen;