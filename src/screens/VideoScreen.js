import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MIcon from '../components/CoreComponents/MIcon';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';

const VideoScreen = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    // En dış ana ekran ve flex:1 boyutlandırması yaptık

    <View className="flex-1 bg-stone-900">
      {/*Üst Kısımdaki Bölüm ekranın 3/5 lik kısmını kaplayan (Video oynatma vs) */}
      <TouchableOpacity
        onLongPress={() => console.log('merhab')}
        className="h-52">
        <Image
          className="w-100 "
          style={{width: '100%', height: '100%'}}
          source={{
            uri: 'https://images.unsplash.com/photo-1639020715359-f03b05835829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{flex: 1}}>
          {/*Video Oyantma Barı*/}

          {/*Video  Info*/}

          <VideoHeader />
          <ChannelCard />
          <CommentsCard />
        </View>

        {/*Alt kısımda bulunan 2/5 yer kaplayan yapı (Önerilen videolar)*/}
        <View className="bg-stone-900" style={{flex: 1}}>
          <Text>
            <FlatList data={list} renderItem={({item}) => <HomeCard />} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
