type Selector<T, P = null> = (state: State, parameter: P) => T;

type Selectors = {
	getUploadedImages: Selector<State["uploaded_images"]>;
	mediaUploaded: Selector<boolean, string[]>;
	getImagesToUpload: Selector<UploadedImages>;
	getBlockGroups: Selector<BlockGroup[]>;
};
