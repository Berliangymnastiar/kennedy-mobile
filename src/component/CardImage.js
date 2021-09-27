import React from 'react';
import {View, Image} from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from '../screen/Home/style';
import {API_URL} from '@env';

function CardImage({picture}) {
  return (
    <View style={styles.wrapperImage}>
      <Image
        source={{uri: `${API_URL}` + picture}}
        style={{
          width: undefined,
          height: undefined,
          resizeMode: 'cover',
          flex: 1,
          borderRadius: 8,
        }}
      />
    </View>
  );
}

export default CardImage;
