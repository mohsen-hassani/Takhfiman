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
    Text
  } from 'react-native';
import axios from 'axios';
import styles from './Styles';
import ImageSlider from 'react-native-image-slider';
import TextInputWithButton from './TextInputWithButton';

class SlideShow extends Component {
  render(){
    return(
      <View>
          <View style={styles.SlideShow}>
              <ImageSlideShow />
          </View>
          <View style={styles.SearchContainer}>
            <TextInputWithButton />
          </View>
      </View>

    );
  }
}


class ImageSlideShow extends Component {
  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
      'https://placeimg.com/640/640/animals',
    ];
 
    return (
      <SafeAreaView style={styles.iContainer}>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={5000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <ImageBackground source={{ uri: item }} style={styles.customImage}>
              </ImageBackground>
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <PointButton index={index} position={position} />
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

class PointButton extends Component {
  roundedButton = (i, p) => {
    if(i === p)
      return <View style={styles.PointButton}></View>;
    return <View style={[styles.PointButton, {opacity: 0.5}]}></View>;
  }
  render(){
    return(
      this.roundedButton(this.props.index, this.props.position)
    );
  }
}

export default SlideShow;