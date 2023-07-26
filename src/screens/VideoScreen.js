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
import React, {useState, useEffect, useContext} from 'react';
import MIcon from '../components/CoreComponents/MIcon';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import {VideoContext} from '../context/VideosStore';
import {useNavigation} from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player';

const VideoScreen = props => {
  const navigation = useNavigation();
  const {vvideos} = useContext(VideoContext);
  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  console.log(videoDetail.videoId);

  return (
    // En dış ana ekran ve flex:1 boyutlandırması yaptık

    <View className="flex-1 bg-stone-900">
      {/*Üst Kısımdaki Bölüm ekranın 3/5 lik kısmını kaplayan (Video oynatma vs) */}
      <TouchableOpacity
        onLongPress={() => console.log('merhab')}
        className="h-58">
        <VideoPlayer
          video={{
            uri: 'https://www.youtube.com/watch?v=2Pmh2I1evQc&ab_channel=G%C3%BCld%C3%BCrG%C3%BCld%C3%BCr',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: videoDetail?.videoThumbnail}}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{flex: 1}}>
          {/*Video Oyantma Barı*/}

          {/*Video  Info*/}

          <VideoHeader
            header={{
              shortHeader: videoDetail?.videoTitle,
              longHeader: videoDetail?.videoHeader,
            }}
          />
          <ChannelCard channelTitle={videoDetail?.channelTitle} />
          <CommentsCard />
        </View>

        {/*Alt kısımda bulunan 2/5 yer kaplayan yapı (Önerilen videolar)*/}
        <View className="bg-stone-900" style={{flex: 1}}>
          <Text>
            <FlatList
              data={vvideos}
              renderItem={({item}) => (
                <HomeCard
                  videoInfo={item}
                  theme={'dark'}
                  onPress={() =>
                    navigation.navigate('VideoScreen', {video: item})
                  }
                />
              )}
            />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
