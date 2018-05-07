import { FETCHING_STARTED, FETCHING_SUCCEEDED, FETCHING_FAILED } from './constants';

const initialState = {
	data: undefined,
	request: { isFetching: false },
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCHING_STARTED:
			return {
				...state,
				request: { isFetching: true },
			};
		case FETCHING_SUCCEEDED: {
			const { data } = action.payload;
			return {
				...state,
				request: { isFetching: false },
				data,
			};
		}
		case FETCHING_FAILED:
			return {
				...state,
				request: { isFetching: false, error: true },
			};

		default:
			return state;
	}
}

export default reducer;
