<div class="reusable-content"><!-- Start Reusable Content -->


<?php
if( have_rows('reusable') ): while ( have_rows('reusable') ) : the_row();
    if( get_row_layout() == 'landing_starter' ):
     get_template_part('template-parts/reusable/landing-starter'); 
?>

<?php endif; endwhile; endif; ?>

</div> <!-- End Reusable Content -->