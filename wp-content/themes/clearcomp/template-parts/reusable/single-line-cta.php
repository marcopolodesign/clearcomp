<div class="container rounded-2xl bg-[var(--mainColorLight)] flex jic p-10 my-<?php the_sub_field('margin');?>">
   <h3 class="text-2xl text-gray-800 font-normal"><?php the_sub_field('title');?></h3>

   <?php 
    $link = get_sub_field('call_to_action');
    if( $link ): 
        $link_url = $link['url'];
        $link_title = $link['title'];
        $link_target = $link['target'] ? $link['target'] : '_self';
        ?>
         <a class="flex gap-2 btn-arrow main-color items-center" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
            <p class="text-xl font-medium"><?php echo esc_html( $link_title ); ?></p>
            <?php get_template_part('template-parts/assets/arrow'); ?>
        </a>
    <?php endif; 
    ?>

</div>