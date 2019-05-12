import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const Func = () => {
    alert('hoo');
}

const ItemDetail = (props) => {
    return (
        <TouchableOpacity 
            activeOpacity={1}
            onPress={() => Func()}>
            <CardSection>
                <Card>
                    <Image 
                        source={{uri: 'http://unicore.ir/t/Takhfiman/0.1/Images/' + props.item.pic}}
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
                                    {props.item.off}%
                                </Text>
                            </View>
                            <View style={{
                            flexDirection: 'column'
                            }}>
                                <Text style={styles.NewPriceStyle}>
                                    {props.item.new_price}
                                </Text>
                                <Text style={styles.PrePriceStyle}>
                                    {props.item.pre_price}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'column'
                        }}>
                            <Text style={styles.albumTitleStyle}>
                                {props.item.product}
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                flex:1,
                                justifyContent: 'flex-end'
                            }}>
                                <Text style={styles.albumArtistStyle}>
                                    {props.item.small_address}, {props.item.name}
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
        backgroundColor: 'darkred',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        width:42,
        height:42,
        marginRight: 10,
        borderRadius: 20
    }
}