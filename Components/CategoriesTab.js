import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,ScrollableTab } from 'native-base';
import {View} from 'react-native';
import VerticalList from './VerticalList';
import HorizontalList from './HorizontalList';
import MenuList from './MenuList';


export default class CategoriesTab extends Component {
    render() {
        return (
            <Container>
            <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading={ <TabHeading><Text>Deals</Text></TabHeading>}>
                <MenuList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Burgers</Text></TabHeading>}>
                <VerticalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Sandwiches</Text></TabHeading>}>
                <HorizontalList/>
              </Tab>
              <Tab heading={ <TabHeading><Text>Pakistani</Text></TabHeading>}>
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
