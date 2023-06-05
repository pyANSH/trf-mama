import { commonAPI } from '.';

export const getUserDetails = async () => {
	const response = await commonAPI({
		path: '/user/get',
		method: 'GET',
	});
	return response;
};
export const updateUserDetails = async ({ body }: any) => {
	const response = await commonAPI({
		path: '/user/update/profile',
		method: 'PUT',
		body,
	});
	return response;
};

export const getMentors =async ( ) => {
	const response =  await commonAPI({
		path: '/user/users/mentors',
		method: 'GET'
	});
	return response;
};
