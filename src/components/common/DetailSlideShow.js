import React, {Component} from 'react'
import {
    View,
    SafeAreaView,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    Text
  } from 'react-native'
import axios from 'axios'
import styles from './Styles'
import ImageSlider from 'react-native-image-slider'
import ImageNotAvailable from '../../images/no_image_available.jpg'



class DetailSlideShow extends Component {
    GetData = () => {
      id = this.props.id;
      return axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/detail_slideshow.php?id=' + id)
            .then(response =>
                this.setState({slides: response.data})
              ).catch(error => {
                  alert(error);
              })
    }
  
  
    constructor(props){
      super(props);
      this.state = {slides: []}
      this.GetData();
  
    }
  
    getImages = () => {
      images = [];
      this.state.slides.map(element => {
        images.push('http://unicore.ir/t/Takhfiman/0.1/Images/' + element.pic)
      });
      return images;
    }
  
    render() {
      imgs = this.getImages()
      if(imgs.length > 0)
      {
        return (
          <SafeAreaView style={styles.iContainer}>
            <ImageSlider
              autoPlayWithInterval={5000}
              images={this.getImages()}
              customSlide={({ index, item, style, width }) => (
                <View key={index} style={[style, styles.customSlide]}>
                    <ImageBackground source={{ uri: item }} style={styles.customImage}>
                    <TouchableOpacity>
                      <Text style={{
                        backgroundColor:'red',
                        padding: 100,
                        opacity: 0
                      }}>
                      </Text>
                    </TouchableOpacity>
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
      else
      {
        return (
          <View style={styles.customSlide}>
              <ImageBackground source={ImageNotAvailable} style={styles.customImage}>
              <TouchableOpacity>
                <Text style={{
                  backgroundColor:'red',
                  padding: 100,
                  opacity: 0
                }}>
                </Text>
              </TouchableOpacity>
              </ImageBackground>
          </View> 
        )
      }
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
  
  export default DetailSlideShow;