import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation'
import React, {Component} from 'react';
import {Text} from 'react-native'

const getTabBarIcon=(navigation:any)=>{
    return  <Text>A</Text>
}

class test extends React.Component{
    render(){
        return <Text>Happy</Text>
    }
}


export const createBottomTabNavigators = createBottomTabNavigator(
    {
        TAB_1: {
            screen: test,
            navigationOptions: (nav: any) => ({
                title: "TAB 1",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_2: {
            screen: test,
            navigationOptions: (nav: any) => ({
                title: "TAB 2",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_3: {
            screen: test,
            navigationOptions: (nav: any) => ({
                title: "TAB 3",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_4: {
            screen: test,
            navigationOptions: (nav: any) => ({
                title: "TAB 4",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
        TAB_5: {
            screen: test,
            navigationOptions: (nav: any) => ({
                title: "TAB 5",
                tabBarIcon: () => getTabBarIcon(nav)
            })
        },
    }
);