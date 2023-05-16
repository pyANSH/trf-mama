import { commonAPI } from '.';

export const scheduleMeeting = async ({ body }: any) => {
	const response = await commonAPI({
		path: '/meeting/schedule',
		method: 'POST',
		body,
	});
	return response;
};

export const getMeetings = async({ params }: any) => {
	const response = await commonAPI({
		path: '/meeting/getall',
		method: 'GET',
		query:params
	});
	return response;
};