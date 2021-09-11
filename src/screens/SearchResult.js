import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import Header from '../components/common/Header';
import axios from 'axios';
import ItemDetail from '../components/common/ItemDetail';
import Styles from '../components/common/Styles';


class SearchResult extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
        this.GetData();
    }

    GetData = () => {
        let q = this.props.navigation.getParam('qu', '')
        console.log(q)

        return axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/search.php?q=' + q)
          .then(response => 
            {
                this.setState({
                    loading: false,
                    q: q,
                    dataSource: response.data
                });
            }).catch(error => {
                alert(error);
            })
    }

    renderHeader = () => {
        return <Header headerText={'جستجو برای:‌ ' + this.state.q} navigation={this.props.navigation}/>
    }

    onRefresh() {
        //Clear old data of the list
        this.setState({ dataSource: [] });
        //Call the Service to get the latest data
        this.GetData();
    }


    render(){
        if(this.state.loading === true)
        {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        else
        {
            if(this.state.dataSource.length > 0)
            {
                return(
                    <View style={{flex: 1}}>
                        <FlatList
                            ListHeaderComponent={this.renderHeader}
                            data={this.state.dataSource}
                            enableEmptySections={true}
                            keyExtractor = {i => i.id.toString()}
                            renderItem={({item}) => <ItemDetail item={item} key={item.id} navigation={this.props.navigation} />}
                            // renderItem={({item}) => <Text>Hi</Text>}
                            refreshControl={
                                <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={this.state.loading}
                                onRefresh={this.onRefresh.bind(this)}
                                />
                            }
                            />
                    </View>
                )
            }
            else
            {
                return(
                    <View style={{flex: 1}}>
                        {this.renderHeader()}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1
                        }}>
                            <Text>جستجوی شما نتیجه ای در بر نداشت</Text>
                        </View>
                    </View>
                )
            }
            
        }
    }
}

export { SearchResult };