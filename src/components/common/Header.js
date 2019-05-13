import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderText}>
                    {this.props.headerText}
                </Text>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.goBack()}}>
                    <Icon 
                        name="md-arrow-forward" 
                        size={30} 
                        style={styles.HeaderBackIcon}
                        color={"#FFF"} />
                </TouchableOpacity>
            </View>
        );
    }
}