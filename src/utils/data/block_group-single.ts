import { __ } from "@wordpress/i18n";

export const block_group: BlockGroupRaw = {
	background_color: "#f7e2d7",
	namespace: "demo-content-for-blocks",
	title: __("Core Blocks - Single"),
	description: __("This group contains individual core blocks."),
	post_types: ["post", "page"],
	custom_images: [
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
			title: `Paragraph`,
			description: __(`Long version.`),
			blocks: [
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					}
				}
			]
		},
		{
			title: `Paragraph`,
			description: __(`Short version.`),
			blocks: [
				{
					name: "core/paragraph",
					attributes: {
						content:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					}
				}
			]
		},
		{
			title: `List`,
			description: __(`Ordered list with 4 elements.`),
			blocks: [
				{
					name: "core/list",
					attributes: {
						ordered: true,
						values:
							"<li>Lorem ipsum dolor sit amet</li><li>Sed do eiusmod tempor incididunt ut labore</li><li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</li><li>Consectetur adipiscing elit</li>"
					}
				}
			]
		},
		{
			title: `List`,
			description: __(`Unordered list with 4 elements.`),
			blocks: [
				{
					name: "core/list",
					attributes: {
						ordered: false,
						values:
							"<li>Lorem ipsum dolor sit amet</li><li>Sed do eiusmod tempor incididunt ut labore</li><li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</li><li>Consectetur adipiscing elit</li>"
					}
				}
			]
		},
		{
			title: `Heading`,
			description: __(`H2 heading.`),
			blocks: [
				{
					name: "core/heading",
					attributes: {
						level: 2,
						content: "Laboris nisi ut aliquip"
					}
				}
			]
		},
		{
			title: `Quote`,
			description: __(`Quote with citation.`),
			blocks: [
				{
					name: "core/quote",
					attributes: {
						citation: "Lorem ipsum",
						value:
							"<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>"
					}
				}
			]
		},
		{
			title: `Media & Text`,
			description: __(`Portrait image with a heading and a paragraph.`),
			blocks: [
				{
					name: "core/media-text",
					attributes: {
						align: "wide",
						isStackedOnMobile: false,
						mediaAlt: "Charles Postiaux image",
						mediaId: "dcfb.charles-postiaux-1539815.id",
						mediaPosition: "left",
						mediaType: "image",
						mediaUrl:
							"dcfb.charles-postiaux-1539815.media_details.sizes.large.source_url",
						mediaWidth: 50
					},
					innerBlocks: [
						{
							name: "core/heading",
							attributes: {
								level: 4,
								content: "Laboris nisi ut aliquip"
							}
						},
						{
							name: "core/paragraph",
							attributes: {
								content:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
							}
						}
					]
				}
			]
		},
		{
			title: `Image`,
			description: __(`Portrait orientation image.`),
			blocks: [
				{
					name: "core/image",
					attributes: {
						id: "dcfb.charles-postiaux-1539815.id",
						link: "dcfb.charles-postiaux-1539815.link",
						url:
							"dcfb.charles-postiaux-1539815.media_details.sizes.large.source_url",
						alt: "Charles Postiaux image",
						caption: "",
						linkDestination: "none"
					}
				}
			]
		},
		{
			title: `Image`,
			description: __(`Landscape orientation image.`),
			blocks: [
				{
					name: "core/image",
					attributes: {
						id: "dcfb.charles-postiaux-1458142.id",
						link: "dcfb.charles-postiaux-1458142.link",
						url:
							"dcfb.charles-postiaux-1458142.media_details.sizes.large.source_url",
						alt: "Charles Postiaux image",
						caption: "",
						linkDestination: "none"
					}
				}
			]
		},
		{
			title: `Gallery`,
			description: __("Gallery with 3 images in 3 columns."),
			blocks: [
				{
					name: "core/gallery",
					attributes: {
						columns: 3,
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
				}
			]
		},
		{
			title: `Gallery`,
			description: __("Gallery with 4 images in 4 columns."),
			blocks: [
				{
					name: "core/gallery",
					attributes: {
						columns: 4,
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
				}
			]
		},
		{
			title: `Gallery`,
			description: __("Gallery with 4 images in 2 columns."),
			blocks: [
				{
					name: "core/gallery",
					attributes: {
						columns: 2,
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
				}
			]
		},
		{
			title: `Code`,
			description: __(`Code block.`),
			blocks: [
				{
					name: "core/code",
					attributes: {
						content: ".some_color{ color: #fc0; }"
					}
				}
			]
		},
		{
			title: `Classic`,
			description: __(`Classic WYSIWYG.`),
			blocks: [
				{
					name: "core/freeform",
					attributes: {
						content: `<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <em>ut labore et dolore</em> <span style="color: #ffcc00;">magna aliqua.</span></p>`
					}
				}
			]
		},
		{
			title: `Custom HTML`,
			description: __(`Some HTML.`),
			blocks: [
				{
					name: "core/html",
					attributes: {
						content: `<h1>An h1 tag</h1><h3>A list of items:</h3><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>`
					}
				}
			]
		},
		{
			title: `Preformatted`,
			description: __(`Preformatted text.`),
			blocks: [
				{
					name: "core/preformatted",
					attributes: {
						content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.`
					}
				}
			]
		},
		{
			title: `Verse`,
			description: __(`Verse text.`),
			blocks: [
				{
					name: "core/verse",
					attributes: {
						content: `<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <em>ut labore et dolore</em>.`
					}
				}
			]
		},
		{
			title: `Pullquote`,
			description: __(`Pullquote with citation.`),
			blocks: [
				{
					name: "core/pullquote",
					attributes: {
						citation: "Lorem ipsum",
						value:
							"<p>Ut enim ad minim veniam, quis nostrud exercitation. <strong>Allamco laboris</strong> nisi ut aliquip ex ea commodo.</p>"
					}
				}
			]
		},
		{
			title: `Table`,
			description: __(`Table block.`),
			blocks: [
				{
					name: "core/table",
					attributes: {
						body: [
							{
								cells: [
									{ content: "Item 1", tag: "td" },
									{ content: "Item 2", tag: "td" }
								]
							},
							{
								cells: [
									{ content: "Item 3", tag: "td" },
									{ content: "Item 4", tag: "td" }
								]
							}
						]
					}
				}
			]
		},
		{
			title: `Button`,
			description: __(`Button block.`),
			blocks: [
				{
					name: "core/button",
					attributes: {
						text: "Lorem ipsum",
						url: "https://example.com/"
					}
				}
			]
		},
		{
			title: `Columns`,
			description: __(`2 Columns with text.`),
			blocks: [
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
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
											"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
									}
								}
							]
						}
					]
				}
			]
		},
		{
			title: `Columns`,
			description: __(`3 Columns with text.`),
			blocks: [
				{
					name: "core/columns",
					attributes: {
						columns: 3
					},
					innerBlocks: [
						{
							name: "core/column",
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
											"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
											"Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
									}
								}
							]
						}
					]
				}
			]
		},
		{
			title: `Columns`,
			description: __(`4 Columns with text.`),
			blocks: [
				{
					name: "core/columns",
					attributes: {
						columns: 4
					},
					innerBlocks: [
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
									}
								}
							]
						}
					]
				}
			]
		},
		{
			title: `Columns`,
			description: __(`5 Columns with text.`),
			blocks: [
				{
					name: "core/columns",
					attributes: {
						columns: 5
					},
					innerBlocks: [
						{
							name: "core/column",
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			title: `Columns`,
			description: __(`6 Columns with text.`),
			blocks: [
				{
					name: "core/columns",
					attributes: {
						columns: 6
					},
					innerBlocks: [
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 2,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Ut enim ad minim veniam, quis nostrud exercitation"
									}
								}
							]
						}
					]
				}
			]
		},
		{
			title: `Columns`,
			description: __(`2 Columns with images and text.`),
			blocks: [
				{
					name: "core/columns",
					attributes: {
						columns: 2
					},
					innerBlocks: [
						{
							name: "core/column",
							number_of_instances: 1,
							innerBlocks: [
								{
									name: "core/image",
									attributes: {
										id: "dcfb.charles-postiaux-1458142.id",
										link:
											"dcfb.charles-postiaux-1458142.link",
										url:
											"dcfb.charles-postiaux-1458142.media_details.sizes.large.source_url",
										alt: "Charles Postiaux image",
										caption: "",
										linkDestination: "none"
									}
								},
								{
									name: "core/paragraph",

									attributes: {
										content:
											"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
									}
								}
							]
						},
						{
							name: "core/column",
							number_of_instances: 1,
							innerBlocks: [
								{
									name: "core/paragraph",
									attributes: {
										content:
											"Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
									}
								},
								{
									name: "core/image",
									attributes: {
										id: "dcfb.charles-postiaux-1539815.id",
										link:
											"dcfb.charles-postiaux-1539815.link",
										url:
											"dcfb.charles-postiaux-1539815.media_details.sizes.large.source_url",
										alt: "Charles Postiaux image",
										caption: "",
										linkDestination: "none"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
