<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Clear_Comp
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script src="https://cdn.tailwindcss.com"></script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'clearcomp' ); ?></a>
	<header id="masthead" class="site-header">
		
	</header><!-- #masthead -->


	<!-- <div class="cursor desktop dn"></div> -->
	<div class="flex pre-load">
		<div class="bg-main-dark-color"></div>
		<div class="bg-main-dark-color"></div>
		<div class="bg-main-dark-color"></div>
		<div class="bg-main-dark-color desktop"></div>
		<div class="bg-main-dark-color desktop"></div>
		<div class="bg-main-dark-color desktop"></div>
		<div class="m-auto white absolute-center overflow-hidden tc w-80">
			<!-- <p class="f5 fw3 flex tc items-center justify-center main-color">Page is <span class="mh3"></span> loading</p> -->
			<span class="db druk f0 ttu fw3 mv4 main-color"></span>
			<!-- <p class="f5 fw3">Page is loading...</p> -->
		</div>

	</div>
	
	<?php get_template_part('template-parts/contact'); ?>
	<div data-barba="wrapper"><!-- Start Barba Container -->