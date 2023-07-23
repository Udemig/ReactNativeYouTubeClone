import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MIcon from './CoreComponents/MIcon'
import YInput from './CoreComponents/YInput'

const CommentsCard = () => {
  return (

    //En Dış Kutu
    <View>

        {/*yorumlar başlığı ve Icon*/}
  <View className='flex-row justify-between p-2 ' >
    <Text className='text-white text-sm font-semibold'>Yorumlar</Text>
    <MIcon name={'chevron-expand-outline'} size={20} color={'white'}/>
  </View>

  {/* Image ve yorum inputu*/}

  <View className='flex-row p-2 '>
    <Image
    
    className='w-10 h-10 rounded-full mr-2'
    source={{uri:'https://images.unsplash.com/photo-1689351779949-35df2fe11464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}/>
    <YInput />
  </View>
    </View>
  )
}

export default CommentsCard

const styles = StyleSheet.create({})