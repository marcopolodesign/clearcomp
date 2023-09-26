<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Clear_Comp
 */

?>

</div> <!-- End Barba Container -->

	<div class=" mt-80 container flex flex-col justify-center items-center">
		<h2 class="text-6xl text-gray-800 text-center mb-4">Calculating commissions<br>since <span id="yearCounter">2023</span></h2>
		<div class="w-3/4">
			<img src="/wp-content/uploads/2023/09/network-3537400_640-1.png" />
		</div>
	</div>
	<footer id="colophon" class="site-footer bg-black p-10 flex jic">
		<h2 class="text-white">ClearComp ® 2023</h2>
		<p class="text-white">Made by Marco Polo</p>
	</footer><!-- #colophon -->
</div><!-- #page -->

<script src="https://unpkg.com/@barba/core"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/CustomEase.min.js"></script>

<?php wp_footer(); ?>

</body>
</html>
