import React, {Component} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    View,
    ScrollView,
    RefreshControl,
  } from 'react-native';
import axios from 'axios';
import ItemDetail from '../components/common/ItemDetail';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { refreshing: true };
        this.GetData();
    }

    GetData = () => {
        return axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/home.php')
          .then(response => this.setState({
              refreshing: false,
              dataSource: response.data
            })).catch(error => {
                alert(error);
            })
        };
    

    onRefresh() {
        //Clear old data of the list
        this.setState({ dataSource: [] });
        //Call the Service to get the latest data
        this.GetData();
    }


    render(){

        if (this.state.refreshing) {
            return (
              //loading view while data is loading
              <View style={{ flex: 1, paddingTop: 20 }}>
                <ActivityIndicator />
              </View>
            );
        }

        return(
            <View style={{
                backgroundColor: "#ddd",
                flex:1
            }}>
                <FlatList
                data={this.state.dataSource}
                enableEmptySections={true}
                keyExtractor = {i => i.id.toString()}
                renderItem={({item}) => <ItemDetail item={item} key={item.id} />}
                refreshControl={
                    <RefreshControl
                    //refresh control used for the Pull to Refresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh.bind(this)}
                    />
                }
                />
            </View>
        );
    }
}

export { Home };


const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      marginTop: 10,
    },
    rowViewContainer: {
      fontSize: 20,
      padding: 10,
    },
    SlideShow:{
        height: 220,
        backgroundColor: '#eeeeaa'
    },
  });