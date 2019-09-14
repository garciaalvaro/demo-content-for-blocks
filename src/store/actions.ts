export const actions: ActionCreators = {
	updateBlockGroups: payload => ({
		type: "UPDATE_BLOCK_GROUPS",
		payload
	}),
	setUploadedImages: payload => ({
		type: "SET_UPLOADED_IMAGES",
		payload
	}),
	setMediaUploaded: payload => ({
		type: "SET_MEDIA_UPLOADED",
		payload
	})
};
