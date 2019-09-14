<?php
/**
 * Plugin Name: Demo Content for Blocks
 * Plugin URI: https://wordpress.org/plugins/demo-content-for-blocks/
 * Description: Add blocks with demo/dummy content to your post content in one click.
 * Author: melonpan
 * Version: 1.1.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace DEMOCONTENTFORBLOCKS;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.1.0' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'demo-content-for-blocks' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}
if ( ! defined( __NAMESPACE__ . '\INC_DIR' ) ) {
	define( __NAMESPACE__ . '\INC_DIR', plugin_dir_path( __FILE__ ) . 'inc/' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_DIR' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

// Register.
require_once INC_DIR . 'register-enqueue.php';
require_once INC_DIR . 'register-rest-upload_images.php';
require_once INC_DIR . 'register-rest-uploaded_images.php';
