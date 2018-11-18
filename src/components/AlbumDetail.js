import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>
    </View>
  );
};

export default AlbumDetail;
