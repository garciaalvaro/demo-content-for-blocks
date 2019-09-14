interface Action<T, P = null> {
	type: T;
	payload: P;
}

interface ActionCreator<A extends Actions> {
	(payload: A["payload"]): A;
}

type ActionSetMediaUploaded = Action<"SET_MEDIA_UPLOADED", true>;
type ActionSetUploadedImages = Action<"SET_UPLOADED_IMAGES", UploadedImages>;
type ActionUpdateBlockGroups = Action<"UPDATE_BLOCK_GROUPS", BlockGroup[]>;

interface ActionCreators {
	setMediaUploaded: ActionCreator<ActionSetMediaUploaded>;
	setUploadedImages: ActionCreator<ActionSetUploadedImages>;
	updateBlockGroups: ActionCreator<ActionUpdateBlockGroups>;
}

type Actions =
	| ActionSetMediaUploaded
	| ActionSetUploadedImages
	| ActionUpdateBlockGroups;
