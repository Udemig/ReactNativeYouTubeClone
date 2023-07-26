import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TrendsHeader from '../components/TrendsComponents/TrendsHeader';
import ChangeCard from '../components/TrendsComponents/ChangeCard';
import TrendingHeader from '../components/TrendsComponents/TrendingHeader';
import HomeCard from '../components/HomeCard';
import { defaultVideo } from '../utils/defaultVideo';

const TrendingScreen = () => {
  const [changer, setChanger] = useState(0);
  return (
    <View className="flex-1 bg-white">
      <TrendsHeader />
      {/*Kategorilerin Değiştiği Kısım*/}

      <View className="bg-white w-100 flex-row justify-between border-b border-slate-300">
        <ChangeCard
          label={'Şimdi'}
          currentindex={changer}
          staticindex={0}
          onPress={() => setChanger(0)}
        />

        <ChangeCard
          label={'Müzik'}
          currentindex={changer}
          staticindex={1}
          onPress={() => setChanger(1)}
        />

        <ChangeCard
          label={'Oyun'}
          currentindex={changer}
          staticindex={2}
          onPress={() => setChanger(2)}
        />

        <ChangeCard
          label={'Filmler'}
          currentindex={changer}
          staticindex={3}
          onPress={() => setChanger(3)}
        />
      </View>

      {/*Filitre kısmının altındaki başlık*/}

      {changer == 0 ? (
        <>
          <TrendingHeader head={'Anlık Trend Videolar'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : changer == 1 ? (
        <>
          <TrendingHeader head={'Trend Müzikler'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : changer == 2 ? (
        <>
          <TrendingHeader head={'Trend Oyunlar'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : changer == 3 ? (
        <>
          <TrendingHeader head={'Trend Filmler'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : null}
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({});
