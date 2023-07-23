import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from './CoreComponents/MIcon';
import IconBox from './CoreComponents/IconBox';
const VideoHeader = () => {
  return (
    <View className="bg-stone-900 p-3">
      {/*Video Başlık info*/}

      <View className="">
        <View className="flex-row justify-between">
          <Text className="text-white text-lg font-semibold">
            Google Pixel ? Pixel Buds{' '}
          </Text>
          <MIcon name={'chevron-down-outline'} color={'white'} size={20} />
        </View>
        <View>
          <Text className="text-stone-500">1.057.571 görüntüleme</Text>
        </View>
      </View>

      {/*Icons Bar*/}
      <View className="flex-row justify-between px-3">
        {/*Icon ve Değerin olduğu kutu*/}

        <IconBox name={'thumbs-up'} value={1} />
        <IconBox name={'thumbs-down'} value={'Beğenmedim'} />
        <IconBox name={'share'} value={'Paylaş'} />
        <IconBox name={'download'} value={'İndir'} />
        <IconBox name={'bookmark'} value={'Kaydet'} />
      </View>
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({});
