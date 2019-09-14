=== Demo Content for Blocks ===
Contributors: melonpan
Tags: gutenberg, demo, demo-content, block, content, blocks, dummy
Requires at least: 5.2
Tested up to: 5.2
Stable tag: 1.0.1
Requires PHP: 7.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Add blocks with demo/dummy content to your post in one click.

== Description ==

Add blocks with demo/dummy content to your post in one click. This plugin can be used to quickly add blocks with predefined content to your posts.
Also, if you are a developer you can use the plugin to set blocks with your own content. This way users will be able to add blocks with content already set.

== Usage ==

Inside the Post editor on the right side of the top Block's Toolbar the plugin icon/button should appear (if not, please read the FAQ below).
Click the icon/button to open the plugin sidebar.
By default two panels appear, single core blocks and multiple core blocks.
Click the ADD or REPLACE buttons to insert the block with its demo content inside the editor.

== Installation ==

Installation from the WordPress admin.

1. Log in to the WordPress admin and navigate to *Plugins > Add New*.
2. Type *Demo Content for Blocks* in the Search field.
3. In the results list *Demo Content for Blocks* plugin should appear, click **Install Now** button.
4. Once it finished installing, click the *Activate* button.
5. Now you can go to any post where the Block editor is enabled.

== Frequently Asked Questions ==

= How to include my custom demo content =

The plugin comes with a hook to include your own groups. Groups can include any block, core or custom, with predefined attribute values.

First, [enqueue your script in the editor](https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/javascript/loading-javascript/).
Inside the script call the filter in the following way:

	const { __ } = wp.i18n;
	const addMyGroup = groups => {
		return [
			...groups,
			{
				namespace: "my-plugin-name", // Required
				title: __("Grid tiles"), // Required
				description: __("Sets of grid tiles."), // Required
				// Indicate in which post types should the group be included.
				post_types: ["ebisu_grid"], // Default is ["post"]
				// Enter a color for the heading background.
				background_color: "#d5c7ab",
				// If your blocks need images to be uploaded to the Media Library, add them here.
				custom_images: [
					// Image that can be found in your plugin/theme's folder.
					{
						name: "my-image-01", // Required
						// If the image is inside your plugin or theme folder, indicate it here.
						wp_folder: "plugins", // "plugins" or "theme"
						// If the previous "wp_folder" property is "plugin" or "theme",
						// then indicate the path from that folder.
						image_path: "/my-plugin/assets/my-image-01.jpg"
					},
					// Image from an external url address.
					{
						name: "my-image-02",
						image_path: "https://example.com/my-image-02.jpg"
					}
				],
				items: [
					{
						title: __("Example paragraph and image"),
						description: __("A description."),
						// Image inside the description.
						// Makes use of a custom image indicated previously.
						// Check "How to include custom images".
						description_img_url:
							"dcfb.my-image-02.media_details.sizes.large.source_url",
						// Array of blocks with their name and attributes data.
						blocks: [
							// Required
							{
								name: "core/paragraph", // Required
								// Block attributes with their value.
								attributes: { // Required
									content: "This is a paragraph with <em>some text</em>."
								}
							},
							{
								name: "core/image", // Required
								// Makes use of a custom image indicated previously.
								// Check "How to include custom images".
								attributes: { // Required
									id: "dcfb.my-image-01.id",
									link: "dcfb.my-image-01.link",
									url: "dcfb.my-image-01.media_details.sizes.large.source_url",
									alt: "My image",
									caption: "",
									linkDestination: "none"
								}
							}
						]
					}
				]
			}
		];
	};
	wp.hooks.addFilter("dcfb.addGroup", "addMyGroup", addMyGroup);


= How to include custom images =

If your blocks make use of images that need to be uploaded to the Media Library, you need to fill the group property "custom_images" with an array of those images data.
Inside the editor, the user will be prompted to upload the images through a button.

Images can be uploaded from your plugin folder, theme folder or an external url.
To use the image data in a block attribute value there are two ways:

-Include a string starting with "dcfb.your-image-name." followed by the property path.

	block_attribute_image_id: "dcfb.my-image-01.id"
	block_attribute_image_url: "dcfb.my-image-01.media_details.sizes.large.source_url"

-Include an object which includes the property *dcfb_resolve* with value a function that returns the desired property. The function will receive all properties from that object as function arguments.
For example the following attribute:

    aspect_ratio: {
		width: "dcfb.your-image.media_details.sizes.large.width",
		height: "dcfb.your-image.media_details.sizes.large.height",
		dcfb_resolve: ({ width, height }) => { return ( width / height ); }
	}

will resolve to the image ( width / height ) value. So if the image width was 1000 and its height 500, then the attribute would end up with the value:

    aspect_ratio: 2

The image property path is taken from the JSON object returned from the media response of the WordPress REST API (in your site check: *https://example.com/wp-json/wp/v2/media*).

To see an example please check "How to include my custom demo content".


= I do not see the plugin icon in the post editor =

Alternatively the Plugin can be opened from the Show More button (the 3 dots on the right side of the Editor Top Bar).
Click the More button and inside the menu list click on the plugin name "Demo Content for Blocks".


== Changelog ==

= 1.1.0 =
* Improved code base. Migrated JavaScript to TypeScript.
* Merged upload images in a single call.
* Fixed styling.

= 1.0.1 =
* Fix "custom_images" property, from dc_resolve to dcfb_resolve.

= 1.0.0 =
* Initial release.

== Credits ==

Images included in the plugin belong to [Charles Postiaux](https://unsplash.com/@charlpost).

== Screenshots ==

1. Default Single core blocks panel.
