import { commonAPI } from '.';

export const getNotes = async ({ params }: any) => {
	const response = await commonAPI({
		path: '/notes/getNotes',
		method: 'GET',
		query:params,
	});
	return response;
};