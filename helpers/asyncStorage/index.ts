import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return new Error(`Error occurred while saving ${key}. ${err}`);
  }
};

export const addToData = async (key: string, value: string) => {
  try {
    const isValue = await getData(key);
    isValue !== null
      ? await AsyncStorage.mergeItem!(key, JSON.stringify(value))
      : storeData(key, value);
  } catch (err) {
    return new Error(`Error occurred while merging ${key}. ${err}`);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // return value != null ? JSON.parse(value) : null;
    return value != null ? value : null;
  } catch (err) {
    return new Error(`Error occurred while getting ${key}. ${err}`);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    return new Error(`Error occurred while deleting ${key}. ${err}`);
  }
};

export const resetData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    return new Error(`Error occurred while resetting app storage. ${err}`);
  }
};
