import {getData, storeData} from '../storage/storage';

export const IsAuthenticated = () => {
	const storage = localStorage.getItem("token");
	if(storage) {
		const session = JSON.parse(storage);
		if(!(session && session.token))
			return false;
		if (Date.now() >= new Date(session?.exp * 1000)) {

			return false;
		}
		return true;
	}
	return false;
}

export const Logout = () =>{
	localStorage.removeItem('loginData');
}

export const GetToken = () => {
	return getData("token");
} 