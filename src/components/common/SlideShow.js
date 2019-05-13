import React, {Component} from 'react';
import {
    View,
    SafeAreaView,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    Text
  } from 'react-native';
import axios from 'axios';
import styles from './Styles';
import ImageSlider from 'react-native-image-slider';
import TextInputWithButton from './TextInputWithButton';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


class SlideShow extends Component {

  LoadCategory = (cat_id) => {
    alert("Category " + cat_id);
  }


  render(){
    return(
      <View>
          <View style={styles.SlideShow}>
              <ImageSlideShow />
              <View style={{
                height:70,
                backgroundColor: '#ccc',
                elevation: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}>
                <TouchableOpacity 
                  onPress={() => {
                    this.LoadCategory(1)
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:70}}>
                  <View>
                    <Icon name={'cup'} size={20} style={{marginLeft:5, alignSelf: 'center'}} />
                    <Text style={{textAlign: 'center'}}>رستوران</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    this.LoadCategory(2)
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:70}}>
                  <View>
                    <Icon name={'basket'} size={20} style={{marginLeft:5,  alignSelf: 'center'}} />
                    <Text style={{textAlign: 'center'}}>مراکز خرید</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    this.LoadCategory(3)
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:70}}>
                  <View>
                    <Icon name={'game-controller'} size={20} style={{marginLeft:5,  alignSelf: 'center'}} />
                    <Text style={{textAlign: 'center'}}>مراکز تفریحی</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    this.LoadCategory(4)
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:70}}>
                  <View>
                    <Icon name={'mustache'} size={20} style={{marginLeft:5,  alignSelf: 'center'}} />
                    <Text style={{textAlign: 'center'}}>زیبایی</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {
                    this.LoadCategory(5)
                  }}
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width:70}}>
                  <View>
                    <Icon name={'social-dribbble'} size={20} style={{marginLeft:5,  alignSelf: 'center'}} />
                    <Text style={{textAlign: 'center'}}>مراکز ورزشی</Text>
                  </View>
                </TouchableOpacity>

                
              </View>
          </View>
          <View style={styles.SearchContainer}>
            <TextInputWithButton />
          </View>
      </View>

    );
  }
}


class ImageSlideShow extends Component {

  GetData = () => {
    return axios.get('http://unicore.ir/t/Takhfiman/0.1/Data/generators/slideshow.php')
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
      images.push('http://unicore.ir/t/Takhfiman/0.1/Images/' + element.pic);
    });
    return images;
  }

  render() {
    return (
      <SafeAreaView style={styles.iContainer}>
        <ImageSlider
          autoPlayWithInterval={5000}
          images={this.getImages()}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
                <ImageBackground source={{ uri: item }} style={styles.customImage}>
                <TouchableOpacity onPress={()=>{alert(item)}}>
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