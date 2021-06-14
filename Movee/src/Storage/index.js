import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key, value) => {
  try {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const getData = async key => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue;
};

export const removeData = async key => {
  let status = false;
  await AsyncStorage.removeItem(key, err => {
    !err ? (status = true) : (status = false);
  });
  return status;
};
