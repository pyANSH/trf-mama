import { commonAPI } from '.';


export const getUserDetails = async () => {
	const response = await commonAPI({
		path: '/user/get',
		method: 'GET'
	});
	return response;
};
