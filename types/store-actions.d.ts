// Actions
type Action<T, P = null> = {
	type: T;
	payload: P;
};

// Action Creators
type ActionCreator<A extends Actions> = (payload: A["payload"]) => A;

// Defined action creators
type ActionSetMediaUploaded = Action<"SET_MEDIA_UPLOADED", true>;

type ActionSetUploadedImages = Action<"SET_UPLOADED_IMAGES", UploadedImages>;

type ActionUpdateBlockGroups = Action<"UPDATE_BLOCK_GROUPS", BlockGroup[]>;

type ActionCreators = {
	setMediaUploaded: ActionCreator<ActionSetMediaUploaded>;
	setUploadedImages: ActionCreator<ActionSetUploadedImages>;
	updateBlockGroups: ActionCreator<ActionUpdateBlockGroups>;
};

// Defined actions
type Actions =
	| ActionSetMediaUploaded
	| ActionSetUploadedImages
	| ActionUpdateBlockGroups;
