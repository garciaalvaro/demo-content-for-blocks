import { __ } from "@wordpress/i18n";

export const block_group: BlockGroupRaw = {
	background_color: "#FFFAF7",
	namespace: "demo-content-for-blocks",
	title: __("Core Blocks - Multiple"),
	description: __("This group contains sets of multiple core blocks."),
	post_types: ["post", "page"],
	custom_images: [
		{
			name: "core-multiple-mixed_1",
			wp_folder: "plugins",
			image_path: "/demo-content-for-blocks/assets/core-multiple.jpg"
		},
		{
			name: "charles-postiaux-1551992",
			wp_folder: "plugins",
			image_path:
				"/demo-content-for-blocks/assets/charles-postiaux-1551992-unsplash.jpg"
		},
		{
			name: "charles-postiaux-1458142",
			wp_folder: "plugins",
			image_path:
				"/demo-content-for-blocks/assets/charles-postiaux-1458142-unsplash.jpg"
		},
		{
			name: "charles-postiaux-1539815",
			wp_folder: "plugins",
			image_path:
				"/demo-content-for-blocks/assets/charles-postiaux-1539815-unsplash.jpg"
		},
		{
			name: "charles-postiaux-1566455",
			wp_folder: "plugins",
			image_path:
				"/demo-content-for-blocks/assets/charles-postiaux-1566455-unsplash.jpg"
		}
	],
	items: [
		{
			title: `Mixed content`,
			description: `Mixed content with text and images.`,
			description_img_url:
				"dcfb.core-multiple-mixed_1.media_details.sizes.full.source_url",
			blocks: [
				{
					name: "core/heading",
					attributes: {
						level: 2,
						content: "Tincidunt nunc pulvinar"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						content:
							"<em>Semper risus in hendrerit gravida rutrum quisque non tellus!</em>"
					}
				},
				{
					name: "core/image",
					attributes: {
						id: "dcfb.charles-postiaux-1458142.id",
						link: "dcfb.charles-postiaux-1458142.link",
						url:
							"dcfb.charles-postiaux-1458142.media_details.sizes.large.source_url",
						alt: "Charles Postiaux image",
						caption: "",
						linkDestination: "none",
						align: "full"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Sit amet mattis vulputate enim nulla aliquet. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras fermentum odio eu feugiat pretium nibh ipsum. Sed nisi lacus sed viverra tellus in hac."
					}
				},
				{
					name: "core/gallery",
					attributes: {
						ids: [
							"dcfb.charles-postiaux-1566455.id",
							"dcfb.charles-postiaux-1539815.id",
							"dcfb.charles-postiaux-1551992.id"
						],
						images: [
							{
								url:
									"dcfb.charles-postiaux-1566455.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1566455.id",
								alt: "dcfb.charles-postiaux-1566455.alt_text",
								link: "dcfb.charles-postiaux-1566455.link",
								caption:
									"dcfb.charles-postiaux-1566455.caption.rendered"
							},
							{
								url:
									"dcfb.charles-postiaux-1539815.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1539815.id",
								alt: "dcfb.charles-postiaux-1539815.alt_text",
								link: "dcfb.charles-postiaux-1539815.link",
								caption:
									"dcfb.charles-postiaux-1539815.caption.rendered"
							},
							{
								url:
									"dcfb.charles-postiaux-1551992.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1551992.id",
								alt: "dcfb.charles-postiaux-1551992.alt_text",
								link: "dcfb.charles-postiaux-1551992.link",
								caption:
									"dcfb.charles-postiaux-1551992.caption.rendered"
							}
						]
					}
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/button",
					attributes: {
						align: "center",
						text: "Viverra",
						url: "https://example.com/"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						align: "center",
						customFontSize: 18,
						content:
							'<em>Nunc sed blandit <a href="https://example.com/">libero volutpat</a> sed cras ornare arcu. Justo laoreet sit amet cursus. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Non pulvinar neque laoreet suspendisse interdum. Aliquam faucibus purus in massa tempor.</em>'
					}
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/heading",
					attributes: {
						level: 3,
						content: "Nibh tellus molestie nunc non, Blandit"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Viverra nam libero justo laoreet sit amet cursus sit. Blandit turpis cursus in hac. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Sodales ut eu sem integer vitae. Nisl purus in mollis nunc sed id semper risus."
					}
				},
				{
					name: "core/image",
					attributes: {
						id: "dcfb.charles-postiaux-1566455.id",
						link: "dcfb.charles-postiaux-1566455.link",
						url:
							"dcfb.charles-postiaux-1566455.media_details.sizes.large.source_url",
						alt: "Charles Postiaux image",
						caption: "",
						linkDestination: "none"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Lobortis elementum nibh tellus molestie. Mattis aliquam faucibus purus in massa tempor nec feugiat:"
					}
				},
				{
					name: "core/gallery",
					attributes: {
						columns: 4,
						align: "full",
						ids: [
							"dcfb.charles-postiaux-1566455.id",
							"dcfb.charles-postiaux-1539815.id",
							"dcfb.charles-postiaux-1551992.id",
							"dcfb.charles-postiaux-1458142.id"
						],
						images: [
							{
								url:
									"dcfb.charles-postiaux-1566455.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1566455.id",
								alt: "dcfb.charles-postiaux-1566455.alt_text",
								link: "dcfb.charles-postiaux-1566455.link",
								caption:
									"dcfb.charles-postiaux-1566455.caption.rendered"
							},
							{
								url:
									"dcfb.charles-postiaux-1539815.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1539815.id",
								alt: "dcfb.charles-postiaux-1539815.alt_text",
								link: "dcfb.charles-postiaux-1539815.link",
								caption:
									"dcfb.charles-postiaux-1539815.caption.rendered"
							},
							{
								url:
									"dcfb.charles-postiaux-1551992.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1551992.id",
								alt: "dcfb.charles-postiaux-1551992.alt_text",
								link: "dcfb.charles-postiaux-1551992.link",
								caption:
									"dcfb.charles-postiaux-1551992.caption.rendered"
							},
							{
								url:
									"dcfb.charles-postiaux-1458142.media_details.sizes.large.source_url",
								id: "dcfb.charles-postiaux-1458142.id",
								alt: "dcfb.charles-postiaux-1458142.alt_text",
								link: "dcfb.charles-postiaux-1458142.link",
								caption:
									"dcfb.charles-postiaux-1458142.caption.rendered"
							}
						]
					}
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/heading",
					attributes: {
						level: 3,
						content: "Non consectetur a erat nam"
					}
				},
				{
					name: "core/columns",
					attributes: {
						columns: 2
					},
					innerBlocks: [
						{
							name: "core/column",
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"<strong>Le cursus turpis massa.</strong>"
									}
								},
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ultrices eros in."
									}
								},
								{
									name: "core/paragraph",
									attributes: {
										content:
											'<a href="https://example.com/">Vitae et leo</a>'
									}
								}
							]
						},
						{
							name: "core/column",
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"<strong>Posuere morbi leo urna.</strong>"
									}
								},
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Non consectetur a erat nam at lectus urna. Consequat nisl vel pretium lectus quam id leo in. Ut etiam sit amet nisl purus. Risus feugiat in ante metus dictum at tempor commodo ullamcorper."
									}
								},
								{
									name: "core/paragraph",
									attributes: {
										content:
											'<a href="https://example.com/">Duis ut diam quam</a>'
									}
								}
							]
						}
					]
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/heading",
					attributes: {
						level: 3,
						content: "Sodales ut eu sem integer vitae"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Lobortis elementum nibh tellus molestie. Mattis aliquam faucibus purus in massa tempor nec feugiat."
					}
				},
				{
					name: "core/quote",
					attributes: {
						citation: "Non consectetur",
						value:
							"<p>Cras fermentum odio eu feugiat pretium nibh ipsum. Sed nisi lacus sed viverra tellus in hac. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Praesent elementum facilisis leo vel fringilla est ullamcorper eget.</p>"
					}
				},
				{
					name: "core/quote",
					attributes: {
						citation: "Posuere morbi",
						value:
							"<p>Vitae et leo duis ut diam quam. Non consectetur a erat nam at lectus urna duis.</p>"
					}
				},
				{
					name: "core/quote",
					attributes: {
						citation: "Tortor id aliquet",
						value:
							"<p>Nunc sed blandit libero volutpat sed cras ornare arcu. Justo laoreet sit amet cursus. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>"
					}
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/button",
					attributes: {
						align: "center",
						text: "Blandit turpis",
						url: "https://example.com/"
					}
				},
				{
					name: "core/paragraph",
					attributes: {
						customFontSize: 18,
						content:
							"<em>Non pulvinar neque laoreet suspendisse interdum. Aliquam faucibus purus in massa tempor. Fringilla urna porttitor rhoncus dolor purus non.</em>"
					}
				},
				{
					name: "core/spacer",
					attributes: { height: 100 }
				},
				{
					name: "core/heading",
					attributes: {
						level: 3,
						content: "Sodales ut eu sem integer."
					}
				},
				{
					name: "core/list",
					attributes: {
						values:
							'<li><a href="https://example.com/">Lorem ipsum dolor sit amet</a></li><li><a href="https://example.com/">Sed do eiusmod tempor incididunt ut labore</a></li><li><a href="https://example.com/">Ut enim ad minim veniam, exercitation ullamco</a></li><li><a href="https://example.com/">Consectetur adipiscing elit</a></li>'
					}
				}
			]
		}
	]
};
