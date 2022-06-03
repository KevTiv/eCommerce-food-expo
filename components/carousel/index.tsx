import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { CTA_Home } from '../cta'
import { CarouselItem } from '../cards'

const HEIGHT = Dimensions.get('screen').height

const productSample={
  img: 'https://image.shutterstock.com/image-photo/raw-chicken-legs-on-white-600w-413330464.jpg',
  name: 'Chicken Legs',
  weight: '3g',
  calories: 200,
  description: 'Irure elit laboris dolore culpa reprehenderit quis magna in duis non eu fugiat. Ad pariatur cupkeyatat amet nostrud anim aute sunt aute eu cillum pariatur. Inckeykeyunt duis mollit sunt sit ullamco cupkeyatat quis. Sit excepteur cupkeyatat do tempor qui amet.',
  price: 20000,
  rating: 4.1
}

const Carousel = () => {
  return (
      <View style={{marginTop: HEIGHT * 0.18}}>
            <Text style={{fontSize:18, fontWeight:'600', marginLeft: 8}}>Our Products</Text>
            <ScrollView horizontal={true} decelerationRate={'fast'} >
                <CarouselItem product={productSample} key={'card-1'}/>
                <CarouselItem product={productSample} key={'card-2'}/>
                <CarouselItem product={productSample} key={'card-3'}/>
                <CarouselItem product={productSample} key={'card-4'}/>
                <CarouselItem product={productSample} key={'card-5'}/>
            </ScrollView>
            <CTA_Home />
      </View>
  )
}

export default Carousel



    