import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

import LEFT from './img/left.png'
const LEFT_IMAGE = Image.resolveAssetSource(LEFT).uri;

import RIGHT from './img/right.png'
const RIGHT_IMAGE = Image.resolveAssetSource(RIGHT).uri;

import CENTER from './img/center.png'
const CENTER_IMAGE = Image.resolveAssetSource(CENTER).uri;

const windowWidth = Dimensions.get('window').width;


export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
			  color : '#A2E5F4',
			  image : LEFT_IMAGE,
          },
          {
              title:"Item 2",
              color : '#3a677d',
			  image : CENTER_IMAGE,
          },
          {
              title:"Item 3",
              color : '#CCCDCE',
			  image : RIGHT_IMAGE,

          }
        ]
      }
    }

    _renderItem({item, index}){
        return (
          <View style={{...style.item, backgroundColor : item.color}}>
            {/* <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text> */}
			<Image style={style.image} source={{uri : item.image}}></Image>
          </View>

        )
    }

    render() {
        return (
			<LinearGradient
				// Background Linear Gradient
				colors={['rgba(111, 14, 236, 0.31)',
				'rgba(246, 16, 155, 0.36)']}
				start={[0.0, 0.5]} end={[1.0, 0.5]}
				style={{flex: 1, justifyContent : 'center' }}
				>
				<View style={{}}>
					<Carousel
					layout={"default"}
					ref={ref => this.carousel = ref}
					data={this.state.carouselItems}
					sliderWidth={windowWidth}
					itemWidth={300}
					renderItem={this._renderItem}
					firstItem={this.state.activeIndex}
					loop
					onSnapToItem = { index => this.setState({activeIndex:index}) } />
				</View>
			</LinearGradient>
        );
    }
}

 
const style = StyleSheet.create({
	image : {
		width: 207, 
		height: 207,
		borderRadius : 207 / 2,
		marginTop : 15,
	},
	item : {
		borderRadius: 12,
		height: 262,
		width : 207,
		marginLeft: 25,
		marginRight: 25,
	},
});