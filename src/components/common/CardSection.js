import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

export default CardSection;

const styles = {
    containerStyle:{
        borderWidth:0,
        borderColor:'#ddd',
        borderBottomWidth:0,
        margin:7,
        marginLeft:10,
        marginRight:10,
        shadowColor:'#000',
        shadowRadius:5,
        shadowOffset:{width:0, height:5},
        shadowOpacity: 0.1,
        backgroundColor:'#efefef',
        elevation:5
    },
}