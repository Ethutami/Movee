import AsyncStorage from '@react-native-async-storage/async-storage';

//storing string value
const storeData = async value => {
try {
await AsyncStorage.setItem('@storage_Key', value);
} catch (e) {
// saving error
}
};

//storing object value
const storeData = async value => {
try {
const jsonValue = JSON.stringify(value);
await AsyncStorage.setItem('user_key', jsonValue);
} catch (e) {
// saving error
}
};

//reading Data
//reading string value
const getData = async () => {
try {
const value = await AsyncStorage.getItem('user_key');
if (value !== null) {
// value previously stored
}
} catch (e) {
// error reading value
}
};

//reading object value

const getData = async () => {
try {
const jsonValue = await AsyncStorage.getItem('@storage_Key');
return jsonValue != null ? JSON.parse(jsonValue) : null;
} catch (e) {
// error reading value
}
};
