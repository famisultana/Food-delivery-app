import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,ScrollableTab } from 'native-base';
import {View} from 'react-native';
import VerticalList from './VerticalList';
import HorizontalList from './HorizontalList';
import MenuItem from './MenuItem';
import colors from '../utilities/colors';


class TabBar extends Component {
    render() {
        return (
            <Container>
            <Tabs renderTabBar={()=> <ScrollableTab tabsContainerStyle={{backgroundColor:'red'}}/>}>
            <Tab heading={ <TabHeading><Text>Deals</Text></TabHeading>}>
                <MenuItem/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Fast Food</Text></TabHeading>}>
                <VerticalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Pakistani</Text></TabHeading>}>
                <HorizontalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Chinese</Text></TabHeading>}>
                <HorizontalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Desserts</Text></TabHeading>}>
                <HorizontalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Beverage</Text></TabHeading>}>
                <HorizontalList/>
              </Tab>
            </Tabs>
          </Container>
        );
    }
}

export default TabBar;