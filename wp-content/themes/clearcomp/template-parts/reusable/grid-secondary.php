<div class="container grid-secondary my-<?php the_sub_field('margin');?> my-">
    <h3 class="uppercase text-black font-semibold">Solutions by role</h3>

    <div class=" mt-10 flex gap-20 justify-between">

    <?php if( have_rows('secondary_grid_content') ):  while( have_rows('secondary_grid_content') ) : the_row(); ?>

    <a href="<?php the_sub_field('link');?>" class="solution rounded-2xl">
        <div class="grid-image mb-10 relative">
            <?php 
            $image = get_sub_field('grid_image');
            if( !empty( $image ) ): ?>
                <img class="margin-auto relative z-20 rounded-lg" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                <div class="absolute w-full h-full rounded-lg bg-[var(--secondaryColor)] top-0 left-0  translate-x-3 translate-y-3 z-0"></div>
            <?php endif; ?>
        </div>
        <div>
            <div class="flex gap-2 mb-4">
                <?php 
                $icon = get_sub_field('grid_icon');
                if( !empty( $icon ) ): ?>
                <div class=" w-10">
                 <img class="margin-auto" src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt']); ?>" />
                </div>
                <?php endif; ?>
                <h3 class="text-black text-4xl"><?php the_sub_field('grid_title'); ?></h3>
            </div>
            <div class="lh-1-2 text-light">
                <?php the_sub_field('grid_content'); ?>
            </div>
        </div>
        
    </a>
    
    <?php endwhile; endif;  ?>

    </div>
</div>