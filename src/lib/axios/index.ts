import axios, { AxiosRequestConfig } from 'axios';

export function withAuth(token: string): AxiosRequestConfig {
	return {
		headers: {
			Authorization: token
		}
	};
}

export const Axios = axios.create({
	baseURL: 'http://localhost:5002/api'
});
