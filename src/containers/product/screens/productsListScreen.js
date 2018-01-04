import React,{ Component } from 'react'
import {
    Text,
    ScrollView,
    View,
} from 'react-native'

class productsListScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
    }

    static navigationOptions = {
        title: '产品',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    componentWillMount(){

    }
    componentDidMount() {
        this.timer = setInterval(
            () => {this.printCount(this.state.count += 1)},
            500
        );
    }
    printCount(count){
        this.setState({
            count:count,
        })

    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearInterval(this.timer);
    }
    render(){
        return(
            <View style = {{backgroundColor:'#2c6',flex:1}}>
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}
export default productsListScreen;