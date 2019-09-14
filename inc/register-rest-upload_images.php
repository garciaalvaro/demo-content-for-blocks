<?php

namespace DEMOCONTENTFORBLOCKS;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Permissions check.
 *
 * @since 1.0.0
 */
function upload_images_permission() {

	if ( current_user_can( 'upload_files' ) ) {
		return true;
	}

	return false;
}

/**
 * Register route that triggers the upload of images.
 *
 * @since 1.0.0
 */
add_action( 'rest_api_init', __NAMESPACE__ . '\register_route_upload_images' );
function register_route_upload_images() {

	register_rest_route(
		'demo-content-for-blocks/v1',
		'/upload_images',
		array(
			'methods'             => 'POST',
			'callback'            => __NAMESPACE__ . '\upload_images',
			'permission_callback' => __NAMESPACE__ . '\upload_images_permission',
		)
	);
}
function upload_images( $request ) {

	require_once( ABSPATH . 'wp-admin/includes/media.php' );
	require_once( ABSPATH . 'wp-admin/includes/file.php' );
	require_once( ABSPATH . 'wp-admin/includes/image.php' );

	$data = json_decode( $request->get_body(), true );

	if (
		empty( $data['images'] ) ||
		! is_array( $data['images'] )
	) {
		return array();
	}

	$dcfb   = get_option( 'demo-content-for-blocks', array( 'images' => array() ) );
	$option = $dcfb['images'];

	foreach ( $data['images'] as $namespace => $images ) {

		foreach ( $images as $image ) {

			if (
				! is_array( $image ) ||
				empty( $image['name'] ) ||
				empty( $image['image_path'] )
			) {
				continue;
			}

			if (
				! empty( $option[ $namespace ] ) &&
				! empty( $option[ $namespace ][ $image['name'] ] ) &&
				$option[ $namespace ][ $image['name'] ]['image_path']
					=== $image['image_path']
			) {
				continue;
			}

			if ( ! empty( $image['wp_folder'] ) && 'theme' === $image['wp_folder'] ) {

				$path = get_stylesheet_directory_uri() . $image['image_path'];

			} elseif ( ! empty( $image['wp_folder'] ) && 'plugins' === $image['wp_folder'] ) {

				$path = plugins_url() . $image['image_path'];

			} else {

				$path = $image['image_path'];

			}

/** @dev_start */
// For local development using Docker.
$path = preg_replace( '/localhost:\d+/', 'localhost:80', $path );
/** @dev_end */

			$image_id = media_sideload_image( $path, 0, null, 'id' );

			if ( is_wp_error( $image_id ) ) {
				continue;
			}

			$option[ $namespace ] = ! isset( $option[ $namespace ] )
				? array()
				: $option[ $namespace ];

			$option[ $namespace ][ $image['name'] ] =
				array(
					'id'         => $image_id,
					'image_path' => $image['image_path'],
				);
		}
	}

	update_option( 'demo-content-for-blocks', array( 'images' => $option ) );

	return $option;
}
