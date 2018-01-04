/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Image,
} from 'react-native';

import {StackNavigator, TabNavigator } from "react-navigation";
import  supplierlistscreen from '../containers/supplier/screens/supplierlistscreen';
import  supplierDetail from '../containers/supplier/screens/supplierDetail';
import  companysListScreen from '../containers/company/screens/companysListScreen';
import  productsListScreen from '../containers/product/screens/productsListScreen';
import  userscreen from '../containers/user/screens/userscreen';
import  companyDetailScreen from '../containers/company/screens/companyDetailScreen';

const MainScreenNavigator = TabNavigator({
    Supplier:{
        screen:supplierlistscreen,
        navigationOptions:{
            headerTitleStyle:{alignSelf:'center'},
            tabBarLabel:'供应商',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/0.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }
    },
    Company:{screen:companysListScreen,
        navigationOptions:{
            tabBarLabel:'公司',
            tabBarIcon:({tintColor}) =>(<Image source={require('../../asset/熊猫.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},
    Product:{screen:productsListScreen,
        navigationOptions:{
            tabBarLabel:'产品',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/1.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},
    User:{
        screen:userscreen,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor}) => (<Image source={require('../../asset/小鸡.png')} style={[{tintColor: tintColor,height:20,width:20}]}/>),
        }},
},{
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    lazy: true, // 是否懒加载
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
});

const SimpleApp = StackNavigator({
    Supplier:{screen: MainScreenNavigator,},
    Company:{screen:companysListScreen,},
    CompanyDetail:{screen:companyDetailScreen,},
    Product:{screen:productsListScreen,},
    User:{screen:userscreen},
    SupplierDetail:{screen:supplierDetail},
}, {
    initialRouteName: 'Supplier',
})
SimpleApp.router = {
    ...SimpleApp.router,
    getStateForAction(action, state) {
        return SimpleApp.router.getStateForAction(action, state);
    },
};

export default SimpleApp;
