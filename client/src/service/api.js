import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL, getAccessToken } from './config';



const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({ 
	baseURL: API_URL,
	timeout: 20000,
});



axiosInstance.interceptors.request.use(
	(config) => {
		
		return config;
	},
	(error) => {
		console.log("could not make request --->", error);
		return Promise.reject(error);
	}
)


axiosInstance.interceptors.response.use(
	function (response) {
		
		return processResponse(response);
	},
	function (error) {
		
		return Promise.reject(processError(error));
	}
)



const processResponse = (response) => {
	// rasponce sucessful
	if (response?.status >= 200 && response?.status < 300) {
		return {
			isSuccess: true,
			data: response.data
		}
	}
	// responce failed
	else {
		return {
			isFailure: true,
			status: response?.status,
			msg: response?.msg,
			code: response?.code
		}
	}
}



// Error can be of 3 type:-
const processError = (error) => {
	if (error.responce) {
		console.log("Error in respoce ---> ", error.toJSON());
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.responceFailure,
			code: error.responce.status
		}
	}
	else if (error.request) {
		console.log("Error in request ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.requestFailuer,
			code: ""
		}
	}
	else {
		console.log("Error in network ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.networkError,
			code: ""
		}
	}
}



export const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
	API[key] = (body, showUploadProgress, showDownloadProgress) => {  
		return axiosInstance({
			url: value.url,
			method: value.method,
			data: body,
			responseType: value.responceType,
			headers: {
				authorization: getAccessToken()
			},
			onUploadProgress: (ProgressEvent) => {
				if (showUploadProgress) {
					let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
					showUploadProgress(percentComplete);
				}
			},
			onDownloadProgress: (ProgressEvent) => {
				if (showDownloadProgress) {
					let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
					showDownloadProgress(percentComplete)
				}
			}
		})
	}
}


