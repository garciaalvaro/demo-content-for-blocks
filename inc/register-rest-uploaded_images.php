<?php

namespace DEMOCONTENTFORBLOCKS;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Permissions check.
 *
 * @since 1.0.0
 */
function get_uploaded_images_permission() {

	if ( current_user_can( 'edit_posts' ) ) {
		return true;
	}

	return false;
}

/**
 * Register route that returns the plugin option with the already uploaded images.
 *
 * @since 1.0.0
 */
add_action( 'rest_api_init', __NAMESPACE__ . '\register_route_get_uploaded_images' );
function register_route_get_uploaded_images() {

	register_rest_route(
		'demo-content-for-blocks/v1',
		'/uploaded_images',
		array(
			'methods'             => 'GET',
			'callback'            => __NAMESPACE__ . '\get_uploaded_images',
			'permission_callback' => __NAMESPACE__ . '\get_uploaded_images_permission',
		)
	);
}
function get_uploaded_images() {

	$dcfb          = get_option( 'demo-content-for-blocks', array( 'images' => array() ) );
	$option        = $dcfb['images'];
	$should_update = false;

	// For each namespace (theme/plugin name) check if its images exist
	// in the Media Library. Otherwise they will appear as not uploaded.
	foreach ( $option as $images_key => $images ) {

		foreach ( $images as $image_key => $image ) {

			// If the image array doesn't have an 'id' property, unset it.
			if ( ! isset( $image['id'] ) ) {
				$should_update = true;
				unset( $option[ $images_key ][ $image_key ] );
				continue;
			}

			$url = wp_get_attachment_url( $image['id'] );

			// If the image was removed from the Media Library, unset it.
			if ( false === $url ) {
				$should_update = true;
				unset( $option[ $images_key ][ $image_key ] );
			}
		}

		if ( empty( $option[ $images_key ] ) ) {
			$should_update = true;
			unset( $option[ $images_key ] );
		}
	}

	if ( true === $should_update ) {
		update_option( 'demo-content-for-blocks', array( 'images' => $option ) );
	}

	return $option;
}
