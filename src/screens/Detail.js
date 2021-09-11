import React, {Component} from 'react';
import {View, Text, Share, ScrollView, Linking, Platform, ActivityIndicator, TouchableOpacity} from 'react-native';
import Header from '../components/common/Header';
import axios from 'axios';
import Styles from '../components/common/Styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import DetailSlideShow from '../components/common/DetailSlideShow';
import Line from '../components/common/Line';

class Detail extends Component {

    constructor(props){
        super(props);

        let id = this.props.navigation.getParam('id', 0)
        this.state = {
            loading: true,
            item_id: id
        };
        
        this.GetData(id)
    }

    GetData = (id) => {
        axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/detail.php?id=' + id)
        .then(response => {
            this.setState({
                Data: response.data,
                loading: false
            });
        })
    }

    show_money(show_price, pre_price, new_price){
        if(show_price)
        {
            return (
                <View style={Styles.Row}>
                    <Text style={{fontSize: 13}}>{new_price} </Text>
                    <Text style={{fontSize: 11, marginTop:1, textDecorationLine: 'line-through'}}>{pre_price}</Text>
                    <Text>قیمت: </Text>
                    <Icon name='tag' size={15} style={{paddingLeft: 10}} />
                </View>
            )
        }
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

            const {
                id,
                product, 
                name, 
                off, 
                start,
                days,
                category,
                pre_price,
                new_price,
                full_address, 
                description,
                type,
                terms,
                guide,
                phone,
                website,
            } = this.state.Data
            let message = product+" "+name+" "+" همراه با "+off+"% درصد تخفیف"
            let show_price = false
            if(pre_price !== "" && new_price !== "")
            {
                message += " تنها " + new_price + " تومان به جای " + pre_price + " تومان"
                show_price = true
            }
            message += '\n'
            share_message = message + "جزپیات و تخفبف های بیشتر کرمان را در اپلیکیشن تخفیمان ببین"
            return(
                <ScrollView style={{flex: 1}}>
                    <Header headerText={product} navigation={this.props.navigation}/>
                    <View style={Styles.container}>
                        <View style={Styles.Row}>
                            <Text style={{marginLeft: 10}}>
                                {message}
                            </Text>
                        </View>
                    </View>

                        <View style={Styles.Row}>
                            <View style={{
                                flex:3, 
                                alignItems: 'flex-end',
                                paddingRight: 20, 
                                justifyContent: 'space-around',
                                borderRightWidth:1, 
                                borderRightColor: '#ccc'}}>
                                    
                                    <View style={Styles.Row}>
                                        <Text style={{fontSize: 13}}>{start}</Text>
                                        <Text>شروع تخفیف: </Text>
                                        <Icon name='calendar' size={15} style={{paddingLeft: 10}} />
                                    </View>

                                    <View style={Styles.Row}>
                                        <Text style={{fontSize: 13}}>{days} روز</Text>
                                        <Text>مهلت استفاده: </Text>
                                        <Icon name='hourglass' size={15} style={{paddingLeft: 10}} />
                                    </View>

                                    <View style={Styles.Row}>
                                        <Text style={{fontSize: 13}}>{type}</Text>
                                        <Text>نوع خرید: </Text>
                                        <Icon name='basket' size={15} style={{paddingLeft: 10}} />
                                    </View>

                                    {this.show_money(show_price,pre_price,new_price)}
                            </View>
                            <View style={{flex:2, alignItems: 'center', justifyContent: 'center', padding: 10}}>
                                <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                                {off}%{" "}
                                </Text>
                                <Text>تخفیف</Text>
                            </View>
                        </View>

                    <View style={Styles.container}>
                        <View style={Styles.Row}>
                            <Text style={{marginLeft: 10}}>
                                {description}
                            </Text>
                        </View>
                    </View>


                    <DetailSlideShow id={this.state.item_id} />

                    
                    <View style={Styles.container}>
                        <View style={Styles.Row}>
                            <View style={{flex:1, alignItems: 'center', borderRightWidth:1, borderRightColor: '#ccc'}}>
                                <TouchableOpacity style={{
                                    alignItems: 'center', 
                                    padding: 10,
                                    width: '100%'
                                }} onPress={() => {
                                    Share.share({
                                        message: share_message,
                                      });
                                }}>
                                    <Icon name='share' size={20} color='#aa4444' />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1, alignItems: 'center'}}>
                                <TouchableOpacity style={{
                                    alignItems: 'center', 
                                    padding: 10,
                                    width: '100%'
                                }} onPress={() => {
                                    Linking.openURL('http://www.unicore.ir/t/Takhfiman/0.1/Data/report.php?id=' + id)
                                }}>
                                    <Icon name='bell' size={20} color='#aa4444' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    

                    <View style={Styles.container}>

                        <View style={Styles.Row}>
                            <View style={Styles.Column}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>شرایط و مقررات</Text>
                                <Text style={{marginLeft: 50}}>{terms}</Text>
                            </View>
                            <Icon 
                                name="book-open" 
                                size={20}
                                color={"#777"} 
                                style={{padding:10, paddingTop: 2}}/>
                        </View>
                        <Line />                    

                        <View style={Styles.Row}>
                            <View style={Styles.Column}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>نحوه استفاده از تخفیف</Text>
                                <Text style={{marginLeft: 50}}>{guide}</Text>
                            </View>
                            <Icon 
                                name="question" 
                                size={20}
                                color={"#777"} 
                                style={{padding:10, paddingTop: 2}}/>
                        </View>
                        <Line />                    

                        <View style={Styles.Row}>
                            <View style={Styles.Column}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>آدرس مجموعه</Text>
                                <Text style={{marginLeft: 50}}>{full_address}</Text>
                                <TouchableOpacity onPress={() => {
                                    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                                    let lat = '40.7127753';
                                    let lng = '-74.0059728';
                                    const latLng = lat + ',' + lng;
                                    const label = name;
                                    const url = Platform.select({
                                      ios: `${scheme}${label}@${latLng}`,
                                      android: `${scheme}${latLng}(${label})`
                                    });
                                    Linking.canOpenURL(url).then(supported => {
                                        if (supported) {
                                          return Linking.openURL(url);
                                        } else {
                                          browser_url =
                                            "https://www.google.de/maps/@" +
                                            lat +
                                            "," +
                                            lng ;
                                            // "?q=" +
                                            // label;
                                          return Linking.openURL(browser_url);
                                        }
                                      });
                                }} style={{padding: 10, paddingRight: 0}}>
                                    <Text style={{color: '#aa4444'}}>مشاهده در Google Maps</Text>
                                </TouchableOpacity>
                            </View>
                            <Icon 
                                name="map" 
                                size={20}
                                color={"#777"} 
                                style={{padding:10, paddingTop: 2}}/>
                        </View>
                        <Line />                    


                        <View style={Styles.Row}>
                            <View style={Styles.Column}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>تلفن های تماس</Text>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('tel:'+ phone);
                                }} style={{padding: 10, paddingRight: 0}}>
                                    <Text style={{color: '#aa4444'}}>{phone}</Text>
                                </TouchableOpacity>
                            </View>
                            <Icon 
                                name="phone" 
                                size={20}
                                color={"#777"} 
                                style={{padding:10, paddingTop: 2}}/>
                        </View>
                        <Line />                

                        <View style={Styles.Row}>
                            <View style={Styles.Column}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>وب سایت</Text>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL(website)
                                }} style={{padding: 10, marginLeft: 50 }}>
                                    <Text style={{color: '#aa4444'}}>{website}</Text>
                                </TouchableOpacity>
                            </View>
                            <Icon 
                                name="globe" 
                                size={20}
                                color={"#777"} 
                                style={{padding:10, paddingTop: 2}}/>
                        </View>
                    </View>
                    


                </ScrollView>
            );
        }
    }
}

export { Detail };