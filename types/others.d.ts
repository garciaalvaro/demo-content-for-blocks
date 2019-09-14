interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

// TODO
interface MediaItem extends Object {}

interface UploadedImages {
	[namespace: string]: {
		[image_name: string]: {
			id: number;
			image_path: string;
		};
	};
}

interface UploadedImagesWithMedia {
	[namespace: string]: {
		[image_name: string]: {
			id: number;
			image_path: string;
			media: MediaItem;
		};
	};
}

interface CustomImage {
	id: string;
	name: string;
	wp_folder: string;
	image_path: string;
}

interface CustomImageRaw {
	name: string;
	wp_folder?: string;
	image_path: string;
}

interface BlockRaw {
	name: string;
	attributes?: Object;
	innerBlocks?: BlockRaw[];
	number_of_instances?: number;
}

interface Block {
	name: string;
	attributes: Object;
	innerBlocks: Block[];
	number_of_instances: number;
}

interface ItemRaw {
	title?: string;
	description?: string;
	description_list?: string[];
	description_img_url?: string;
	blocks?: BlockRaw[];
}

interface Item {
	actions: BlockGroup["actions"];
	id: string;
	title: string;
	description: string;
	description_list: string[];
	description_img_url: string;
	media_dependencies: string[];
	blocks: Block[];
}

interface BlockGroupRaw {
	background_color?: string;
	namespace?: string;
	title?: string;
	description?: string;
	post_types?: string[];
	custom_images?: CustomImageRaw[];
	actions?: ("add" | "replace")[];
	items: ItemRaw[];
}

interface BlockGroup {
	id: string;
	background_color: string;
	namespace: string;
	title: string;
	description: string;
	post_types: string[];
	custom_images: CustomImage[];
	actions: ("add" | "replace")[];
	is_active: boolean;
	items: Item[];
}
