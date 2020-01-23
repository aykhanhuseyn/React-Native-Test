import React from 'react';
import { Image } from 'react-native';
import logo from 'D:/Playground/react-native/rn-first-app/public/img/BirPay.svg';

const ImagesExample = () => (
  <Image
    source={{
      uri:
        'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'
    }}
    style={{ width: 45, height: 45 }}
  />
);
export default ImagesExample;
