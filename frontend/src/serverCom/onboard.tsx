import { commonAPI } from '.';

export const userOnboard = async ({ body }: any) => {
	const response = await commonAPI({
		path: '/user/login',
		method: 'POST',
		body,
	});
	return response;
};

export const userInterest = async ({ body }: any) => {
	const response = await commonAPI({
		path: '/user/update/status',
		method: 'PUT',
		body,
	});
	return response;
};
