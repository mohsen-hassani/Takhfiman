import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class ItemDetail extends Component {

    Func = (product) => {
        this.props.navigation.navigate('Detail');
    }


    render()
    {    
        return (
            <TouchableOpacity 
                activeOpacity={1}
                onPress={() => this.Func(this.props.item.product)}>
                <CardSection>
                    <Card>
                        <Image 
                            source={{uri: 'http://unicore.ir/t/Takhfiman/0.1/Images/' + this.props.item.pic}}
                            style={styles.imageStyle} 
                            />
                    </Card>
                    <Card>
                        <View style={{
                            padding: 5,
                            justifyContent: 'space-between',
                            flex: 1,
                            flexDirection: 'row',

                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                flexDirection: 'row'
                                }}>
                                    <Text style={styles.OffTextStyle}>
                                        {this.props.item.off}%
                                    </Text>
                                </View>
                                <View style={{
                                flexDirection: 'column'
                                }}>
                                    <Text style={styles.NewPriceStyle}>
                                        {this.props.item.new_price}
                                    </Text>
                                    <Text style={styles.PrePriceStyle}>
                                        {this.props.item.pre_price}
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'column'
                            }}>
                                <Text style={styles.albumTitleStyle}>
                                    {this.props.item.product}
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    flex:1,
                                    justifyContent: 'flex-end'
                                }}>
                                    <Text style={styles.albumArtistStyle}>
                                        {this.props.item.small_address}, {this.props.item.name}
                                    </Text>
                                    <Icon name={'location-pin'} size={15} style={{marginLeft:5}} />
                                </View>
                            </View>
                        </View>
                    </Card>
                </CardSection>
            </TouchableOpacity>
        );
    }
}

export default ItemDetail;

const styles = {
    thumbnailViewStyle:{

    },
    thumbnailImageStyle:{
        width:50,
        height:50,
        marginRight:5
    },
    imageStyle:{
        height:200,
        flex:1,
        width:null
    },
    albumTitleStyle:{
        fontSize:18,
        color: '#555'
    },
    albumArtistStyle:{
        fontSize:12,
        color:'#888'
    },
    PrePriceStyle:{
        color: 'darkred',
        textDecorationLine: 'line-through'
    },
    NewPriceStyle:{
        color: 'forestgreen',
        fontSize: 18
    },
    OffTextStyle:{
        backgroundColor: '#aa4444',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        width:42,
        height:42,
        marginRight: 10,
        borderRadius: 20
    }
}