import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import ChannelCard from '../components/ChannelCard';

const HomeScreen = () => {
  return (
    <View className='flex-1'>
      <Header />

        <HomeCard />
        <ChannelCard/>
    
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
