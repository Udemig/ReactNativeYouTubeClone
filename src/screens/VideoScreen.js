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
import React, {useState,useEffect} from 'react';
import MIcon from '../components/CoreComponents/MIcon';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';

const VideoScreen = props => {
  const list = [1, 2, 3, 4, 5];
  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  //console.log(videoDetail)
  const [videos,setVideos]=useState([])
  const getVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',

        
    {
      params: {
        key:'AIzaSyC_5DBVu2qd_OZR4bJ63k0lwFqSO1OM_SE',
        part:'snippet',
        chart:'mostPopular',
        maxResult:10,
      },
  
    }
      );
     // console.log(response.data.items);
      setVideos(response.data.items)
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
getVideos()
},[])

  const videoTitle = videoDetail?.snippet.title;
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
            uri: `${videoDetail?.snippet.thumbnails.standard.url}`,
          }}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{flex: 1}}>
          {/*Video Oyantma Barı*/}

          {/*Video  Info*/}

          <VideoHeader header={videoTitle} />
          <ChannelCard channelTitle={videoDetail?.snippet.channelTitle} />
          <CommentsCard />
        </View>

        {/*Alt kısımda bulunan 2/5 yer kaplayan yapı (Önerilen videolar)*/}
        <View className="bg-stone-900" style={{flex: 1}}>
          <Text>
            <FlatList data={videos} renderItem={({item}) => <HomeCard videoInfo={item} theme={'dark'} />} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
