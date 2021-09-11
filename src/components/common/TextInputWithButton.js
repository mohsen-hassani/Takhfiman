import React, {Component} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    View,
    ScrollView,
    RefreshControl,
    SafeAreaView,
    ImageBackground,
    TouchableHighlight,
    TextInput
  } from 'react-native';
  import Icon from 'react-native-vector-icons/SimpleLineIcons';


class TextInputWithButton extends Component {
    constructor(props){
        super(props);
        this.state = {text: 'جستجو کنید...'}
    }
  render(){
    return(
      <View style={styles.SearchContainer}>
          <View style={styles.SearchButton}>
            <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('SearchResult', {'qu': this.state.text})
            }}>
                <Icon name={'magnifier'} size={20} color={'#555'} style={{marginLeft:5}} />
            </TouchableHighlight>
          </View>
          <TextInput 
                style={styles.SeachInput}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
          />
      </View>

    );
  }
}


export default TextInputWithButton;


const styles = {
    SearchContainer:{
        flex:1,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 25,
        elevation: 5,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SearchInputContainer:{

    },
    SeachInput:{
        color: '#555',
        flex: 1
    },
    SearchButton:{
        padding: 10,
    }
}