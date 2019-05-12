import React, {Component} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Text,
    View,
    RefreshControl,
  } from 'react-native';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { refreshing: true };
        this.GetData();
    }

    GetData = () => {
        //Service to get the data from the server to render
        return axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/home.php')
          .then(response => this.setState({
              refreshing: false,
              //Setting the data source for the list to render
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
            <View>
                <FlatList
                data={this.state.dataSource}
                enableEmptySections={true}
                keyExtractor = {i => i.id.toString()}
                renderItem={({item}) => (
                    <Text
                    style={styles.rowViewContainer}
                    onPress={() => alert(item.id)}>
                    {item.name}
                    </Text>
                )}
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
  });