import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import MenuList from '../Components/MenuList';
import colors from '../utilities/colors';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Cakes: MenuList,
        Brownies: MenuList,
        CupCakes: MenuList,
        Shakes: MenuList,
        Biscuits: MenuList,

    },
    {

        tabBarOptions: {
            labelStyle: {
                fontSize: 14,
                textTransform: 'capitalize',
                fontWeight: 'bold'
            },
            tabStyle: {
                width: 100,
            },
            style: {
                backgroundColor: 'white',
                elevation: 2,
                borderTopColor:'rgba(0,0,0,0.05)',
                borderTopWidth:2

            },
            upperCaseLabel: false,
            scrollEnabled: true,
            activeTintColor: colors.primary,
            inactiveTintColor: colors.secondary,
            indicatorStyle: {
                backgroundColor: colors.primary,
                height:3
            }

        }
    });


export default createAppContainer(TabNavigator);