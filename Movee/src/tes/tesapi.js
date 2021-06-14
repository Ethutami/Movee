import axios from 'axios';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const tesapi = () => {
  console.log('helo helo hai');
  axios({
    method: 'GET',
    url: `https://team-d.gabatch11.my.id/category`,
  })
    .then(res => console.log('ini res gen', res.data))
    .catch(err => err);

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default tesapi;
