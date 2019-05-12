import React from 'react';
import { TouchableOpacity, Text, Linking } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={styles.containerStyle}
            onPress={() => {Linking.openURL(props.URL)}}    
        >
            <Text>
                {props.Text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = {
    containerStyle:{
        borderColor:'#ddd',
        borderBottomWidth:1,
        flexDirection: 'row',
        padding:5,
        backgroundColor:'#00ff7a',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:5
    },
}