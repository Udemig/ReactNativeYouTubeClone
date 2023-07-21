import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MIcon from './MIcon';

const HomeCard = () => {
  return (
    <View>
      {/* Thumbnail ve süre sayacı*/}
      <View className="justify-center items-center relative">
        <Image
          className="w-screen h-60"
          source={{
            uri: 'https://images.unsplash.com/photo-1639020715359-f03b05835829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />

        <View className="bg-slate-800 rounded absolute right-4 bottom-3">
          <Text className=" text-white p-1  ">6:43</Text>
        </View>
      </View>

      {/*Video Info*/}

      <View className="p-2 flex-row justify-between items-center">
        <View className="gap-2 flex-row items-center">
          <Image
            className="rounded-full w-10 h-10"
            source={{
              uri: 'https://images.unsplash.com/photo-1639020715359-f03b05835829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />

          <View>
            <Text>Videonun Adı</Text>
            <View className="flex-row gap-2">
              <Text className='text-slate-600'>Kanal Adı</Text>
              <Text className='text-slate-600'>250.000</Text>
              <Text className='text-slate-600'>16.00</Text>
            </View>
          </View>
        </View>
        <MIcon name={'ellipsis-vertical'} size={20} />
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
