import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = 'http://localhost:3005/comments';
const POST_COMMENTS_URL = 'http://localhost:3005/comments?post_id=';

export const getComments = async (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	const loadedComments = await fetch(url);
	const loadedComments_1 = await loadedComments.json();
	return loadedComments_1.map(transformComment);
};
