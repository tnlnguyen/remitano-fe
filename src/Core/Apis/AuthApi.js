import { AxiosInstance } from 'Core/Apis/ApiClient';

const login = async (data) => {
	const response = await AxiosInstance.post('/v1/user/login',data);
	return response.data;
}

const register = async (data) => {
	const response = await AxiosInstance.post('/v1/user/register',data);
	return response.data;
}

const logout = async (data) => {
	const response = await AxiosInstance.post('/v1/user/logout',data);
	return response.data;
}

export {
	login,
	register,
	logout,
}