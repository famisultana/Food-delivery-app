import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import CategoryItem from '../Components/CategoryItem';


class Category extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginHorizontal: 10,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                <CategoryItem name="Fast food" />
                <CategoryItem name="Pizza" />
                <CategoryItem name="Burgers" />
                <CategoryItem name="Sandwiches" />
                <CategoryItem name="Pakistani" />
                <CategoryItem name="Chinese" />
                <CategoryItem name="Desserts" />
            </View>
        )
    }
}

class SearchBar extends Component {
    state = {
        viewCategories: false
    }

    renderCategories = () => {
        if (this.state.viewCategories) {
            return <Category />
        }
        else {
            return null;
        }
    }

    toggleView = () => {
        this.setState({
            viewCategories: !this.state.viewCategories
        });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.toggleView}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                        <Icon name="th-large" style={{ fontSize: 16, margin: 10 }} />
                        <Text style={{ borderRightColor: 'gray', borderRightWidth: 0.5, paddingRight: 10 }}>Categories</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <Icon name='search' style={{ fontSize: 16, margin: 10 }}></Icon>
                    <TextInput placeholder="Search" style={{ width: 180 }} />
                    <Icon name='sort-alpha-down' style={{ fontSize: 18, position: 'absolute', right: 10 }} />
                </View>
                {this.renderCategories()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        height: 50,
        margin: 10,
        alignItems: 'center',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        elevation: 1
    }
});


export default SearchBar;