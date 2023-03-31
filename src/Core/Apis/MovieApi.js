import { AxiosInstance } from 'Core/Apis/ApiClient';

const getMovies = async () => {
	const response = await AxiosInstance.get('/v1/movie');
	return response.data;
}

const shareMovie = async (data) => {
	const response = await AxiosInstance.post('/v1/movie/share',data);
	return response.data;
}

export { shareMovie, getMovies };
