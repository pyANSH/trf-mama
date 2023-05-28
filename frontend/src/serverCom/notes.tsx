import { commonAPI } from '.';

export const getNotes = async ({ params }: any) => {
	const response = await commonAPI({
		path: '/notes/getNotes',
		method: 'GET',
		query:params,
	});
	return response;
};

export const uploadNotes = async ({ body }: any) => {
	const response = await commonAPI({
		path: '/notes/upload',
		method: 'POST',
		body,
	});
	return response;
};

export const deleteNotes =async ({ body }: any) => {
	const response = await commonAPI({
		path: '/notes/deleteNotes',
		method: 'DELETE',
		body,
	});
	return response;
}; 