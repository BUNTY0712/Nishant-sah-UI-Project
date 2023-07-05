const { createSlice } = require('@reduxjs/toolkit');

const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		clickItem: null,
	},

	reducers: {
		CLickItem(state, action) {
			state.clickItem = action.payload;
		},
	},
});

const { actions } = UiReducer;

export const { CLickItem } = actions;

export default UiReducer;
