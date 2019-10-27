import React, { Component } from 'react';
import colors from '../utilities/colors';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import MenuList from '../Components/MenuList';

class TabBar extends Component {
  render() {
    return (
      <ScrollableTabView
        tabBarBackgroundColor='white'
        tabBarInactiveTextColor={colors.secondary}
        tabBarActiveTextColor={colors.primary}
        renderTabBar={() =>
          <ScrollableTabBar style={{
            borderWidth: 0,
            borderColor: 'rgba(0,0,0,0.5)',
            elevation: 4,
          }}
          />
        }
      >
        <MenuList tabLabel="Cakes" />
        <MenuList tabLabel="Brownies" />
        <MenuList tabLabel="Cupcakes" />
        <MenuList tabLabel="Shakes" />
        <MenuList tabLabel="Biscuits" />
      </ScrollableTabView>
    );
  }
}

export default TabBar;