import React, { Component } from 'react';
import companyDetailScreen from './companyDetailScreen';
import {
    ListView,
    View,
    ScrollView,
    StyleSheet,
    Button
} from 'react-native';

class companysListScreen extends Component {
    static navigationOptions = {
        title: '厂商',
        titleStyle: {color: '#ff00ff'},
        headerStyle:{backgroundColor:'red'}
    };
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.datas = null;
        this.state = {
            dataSource: this.ds.cloneWithRows(this.datas ? this.datas : []),//提现明细
        };
    }
    componentWillMount(){
        var arr = [];
        for (let i=0;i<20;i++){
            arr.push(`第${i}排`)
        }
        this.setState({
            dataSource: this.ds.cloneWithRows(arr),
        })
    }
    render() {
        return (
            <ScrollView style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={styles.listViewStyle}>
                        <Button title={rowData} onPress={() => this.renderNextPage()}></Button>
                    </View>}
                />
            </ScrollView>
        );
    }
    renderNextPage(){
        this.props.navigation.navigate("companyDetailScreen",{listRow:'hello world'})
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:10,
    },
    inputText: {
        height: 30,
        borderWidth: 0,
        color:'#333333',
        marginLeft: 10,
        fontSize: 24,
    },
    contractStyle :{
        flexDirection:'row',
        marginTop:30,
        marginBottom:30,
        marginLeft:40,
        width:143,
    },
    selectImageStyle:{
        width: 22,
        height: 22,
        marginRight:9,
    },
    listViewStyle:{
        flexDirection:'row',
        height:30,
        backgroundColor:'cyan',
        marginTop:3,
        justifyContent:'center',
        alignItems:'center',
    }

});
export default companysListScreen;