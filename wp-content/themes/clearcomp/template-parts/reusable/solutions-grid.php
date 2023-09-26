<div class="container solutions-grid my-<?php the_sub_field('margin');?> relative z-10">
    <h3 class="uppercase text-black font-semibold">Solutions</h3>

    <div class=" mt-10 flex gap-20 justify-between">

   
    <?php if( have_rows('solutions_grid_content') ):  while( have_rows('solutions_grid_content') ) : the_row(); ?>

    <a href="<?php the_sub_field('link');?>" class="solution rounded-2xl border-[1px] border-[var(--mainColor)] p-8 hover:bg-[var(--mainColorLight)] smooth-t cursor-pointer backdrop-blur-sm w-1/3">
        <div class="solution-icon flex">
            <?php 
            $image = get_sub_field('solution_icon');
            if( !empty( $image ) ): ?>
                <img class="margin-auto" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
            <?php endif; ?>
        </div>
        <?php the_sub_field('solution_content'); ?>
        
    </a>
    
    <?php endwhile; endif;  ?>

    </div>
</div>