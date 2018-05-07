import { FETCHING_STARTED, FETCHING_SUCCEEDED, FETCHING_FAILED, SET_SELECTED_DAY } from './constants';

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
				selectedDay: data[0].datetime,
			};
		}
		case SET_SELECTED_DAY: {
			const { selectedDay } = action.payload;
			return {
				...state,
				selectedDay,
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
