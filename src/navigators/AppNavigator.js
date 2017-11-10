import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator,TabNavigator} from 'react-navigation';

import  supplierlistscreen from '../containers/supplier/screens/supplierlistscreen';
import  companysListScreen from '../containers/company/screens/companysListScreen';
import  productsListScreen from '../containers/product/screens/productsListScreen';
import  userscreen from '../containers/user/screens/userscreen';

const MainScreenNavigator = TabNavigator({

    Supplier:{
        screen: supplierlistscreen,
        path:'companyDetailScreen',
        // getScreen: () => require('./src/company/screens/companyDetailScreen').default,
        navigationOptions:{
            tabBarLabel:'供应商',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/0.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},

    Company:{
        screen:companysListScreen,
        navigationOptions:{
            tabBarLabel:'厂商',
            tabBarIcon:({tintColor}) =>(<Image source={require('../../asset/熊猫.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},

    Product:{
        screen:productsListScreen,
        navigationOptions:{
            tabBarLabel:'产品',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/1.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},

    User:{
        screen:userscreen,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/小鸡.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }
    },
},{
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    }
})
export const AppNavigator = StackNavigator({
    Supplier:{
        screen:MainScreenNavigator,
        navigationOptions:{
            headerTitleStyle:{alignSelf:'center'}
        }
    },
    Company: { screen: companysListScreen },
});
const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
