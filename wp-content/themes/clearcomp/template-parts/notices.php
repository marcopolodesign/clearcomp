<?php if (get_field('alert_content', 6)): 
$link = get_field('call_to_action', 6);
if( $link ): 
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
endif;
    
?>
<div class="alerts-container bg-main-gradient fixed w-full top-0 left-0 z-50">
    <div class="container py-3 flex md:flex-row flex-col items-center gap-3 justify-center">
        <p class="text-white text-base"><?php the_field('alert_content', 6); ?></p>
            <a class="flex gap-2 btn-arrow white items-center white-arrow" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">
                <p class="font-medium text-white text-base"><?php echo esc_html( $link_title ); ?></p>
                <?php get_template_part('template-parts/assets/arrow'); ?>
            </a>
    </div>
</div>
<?php endif; ?>