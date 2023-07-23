import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReadMoreCard = ({content}) => {
    //Gelen channelName diziye dönüştruloyr
    const statusContent = content.split('');

    //gelen channellName nin diziye dönüştürlmüş halnini uzunluğu tespit ediliyor
    const karakterSayisi = statusContent.length;
  return (
    <View className='mt-5'>
      <Text>
        {/*Karakter Sayısının 8 ve 8 den küçük olma durumu kontrol ediliyor çünkü 8 den fazla ise 8 karakterden sonra ... olacak*/}
        {karakterSayisi <= 8
        //Eğer 8 ve 8den küçükse kanal ismi direk yazdırılıyor
          ? content
          //fazla ise 
          //önce ilk sekiz karakter alınıyor  //sonrasinde Join metodu ile sonuna '...' ekleniyor  
             : statusContent.slice(0, 25).join('') + `\n...Devamını Oku`}</Text>
    </View>
  );
};

export default ReadMoreCard;

const styles = StyleSheet.create({});
