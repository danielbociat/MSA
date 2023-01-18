import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name: string, value: string) => {
	try {
		AsyncStorage.setItem(name, value);
	} catch (e) {
		console.log(e);
	}
};

export const getData = async (name: string) => {
	try {
		const value = AsyncStorage.getItem(name);
		if (value !== null) {
			return value;
		}
	} catch (e) {
		console.log(e);
	}
};