<?php

namespace DEMOCONTENTFORBLOCKS;

// Exit if accessed directly.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) { die; }

$option_name = 'demo-content-for-blocks';

delete_option( $option_name );

// For site options in Multisite.
delete_site_option( $option_name );
