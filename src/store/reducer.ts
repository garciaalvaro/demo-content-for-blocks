const initial_state: State = {
	block_groups: [],
	media_uploaded: false,
	uploaded_images: null
};

export const reducer = (state = initial_state, action: Actions) => {
	switch (action.type) {
		case "SET_MEDIA_UPLOADED": {
			return {
				...state,
				media_uploaded: action.payload
			};
		}
		case "SET_UPLOADED_IMAGES": {
			return {
				...state,
				uploaded_images: action.payload
			};
		}
		case "UPDATE_BLOCK_GROUPS": {
			return {
				...state,
				block_groups: action.payload
			};
		}
		default:
			return state;
	}
};
