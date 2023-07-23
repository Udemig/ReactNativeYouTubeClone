import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import ChannelCard from '../components/ChannelCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <Header/>

      <HomeCard onPress={() => navigation.navigate('VideoScreen')} />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
