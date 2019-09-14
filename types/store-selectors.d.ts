type Selector<T, P = null> = (state: State, parameter: P) => T;

interface Selectors {
	getUploadedImages: Selector<State["uploaded_images"]>;
	mediaUploaded: Selector<boolean, string[]>;
	getImagesToUpload: Selector<UploadedImages>;
	getBlockGroups: Selector<BlockGroup[]>;
}
