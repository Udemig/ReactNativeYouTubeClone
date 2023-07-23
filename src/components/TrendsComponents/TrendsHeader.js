import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from '../CoreComponents/MIcon';

const TrendsHeader = () => {
  return (
    //Hepsini Kapsayan Kutu
    <View className="flex-row justify-between p-3 bg-white">
      {/*Geri İconu ve Trend yazısı*/}

      <View className="flex-row items-center justify-center gap-3">
        <MIcon name={'arrow-back-outline'} size={24} />
        <Text className="font-semibold text-lg">Trendler</Text>
      </View>

      {/*Sağ icon bölümü*/}

      <View className="flex-row items-center justify-center gap-3">
        <MIcon name={'bar-chart-outline'} size={25} />
        <MIcon name={'search-outline'} size={25} />
        <MIcon name={'ellipsis-vertical'} size={25} />
      </View>
    </View>
  );
};

export default TrendsHeader;

const styles = StyleSheet.create({});
