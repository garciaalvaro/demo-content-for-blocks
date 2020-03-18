interface ComponentProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
	children?: React.ReactNode;
}

interface CustomImageToResolve {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
	dcfb_resolve: Function;
}

type MediaItem = {
	id: number;
};

type NamespaceImage = {
	id: number;
	image_path: string;
};

type NamespaceImageWithMedia = NamespaceImage & {
	media: MediaItem;
};

type UploadedImages = {
	[namespace: string]: {
		[image_name: string]: NamespaceImage;
	};
};

type UploadedImagesWithMedia = {
	[namespace: string]: {
		[image_name: string]: NamespaceImageWithMedia;
	};
};

type CustomImageRaw = {
	name: string;
	wp_folder?: string;
	image_path: string;
};

type CustomImage = Required<CustomImageRaw> & {
	id: string;
};

type BlockRaw = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attributes?: Record<string, any>;
	name: string;
	number_of_instances?: number;
	innerBlocks?: BlockRaw[];
};

type Block = Required<Omit<BlockRaw, "innerBlocks">> & {
	innerBlocks: Block[];
};

type ItemRaw = {
	title?: string;
	description?: string;
	description_list?: string[];
	description_img_url?: string;
	blocks?: BlockRaw[];
};

type Item = Required<Omit<ItemRaw, "blocks">> & {
	blocks: Block[];
	actions: BlockGroup["actions"];
	id: string;
	media_dependencies: string[];
};

type BlockGroupRaw = {
	background_color?: string;
	namespace?: string;
	title?: string;
	description?: string;
	post_types?: string[];
	actions?: ("add" | "replace")[];
	custom_images?: CustomImageRaw[];
	items: ItemRaw[];
};

type BlockGroup = Required<Omit<BlockGroupRaw, "custom_images" | "items">> & {
	custom_images: CustomImage[];
	items: Item[];
	id: string;
	is_active: boolean;
};
