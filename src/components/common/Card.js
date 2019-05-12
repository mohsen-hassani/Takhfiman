import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

export default Card;

const styles = {
    containerStyle:{
        borderColor:'#ddd',
        borderBottomWidth:1,
        flexDirection: 'row',
    },
}