export default {
	entry: __dirname + "/pragma.entry.js",
	output: {
		path: __dirname + "/../_release/inc",
		filename: "_temp.js"
	},
	module: {
		rules: [
			{
				test: /\.php?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]"
						}
					},
					{
						loader: "webpack-loader-clean-pragma",
						options: {
							pragmas: [
								{
									start: "/** @dev_start */",
									end: "/** @dev_end */"
								},
								{
									start: "/** @pro_start */",
									end: "/** @pro_end */"
								}
							]
						}
					}
				]
			}
		]
	}
};
