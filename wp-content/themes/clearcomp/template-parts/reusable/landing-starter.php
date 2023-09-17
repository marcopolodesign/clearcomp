<div class="home-starter min-h-[80vh] flex container">
    <div class="flex flex-col justify-center align-middle">
        <p class=' text-gray-600 text-center mb-5 text-2xl'><?php the_sub_field('sub_parragraph');?></p>
        <h1 class=" text-7xl text-center gradient-text"><?php the_sub_field('main_title');?></h1>
        <?php 
            $link = get_sub_field('call_to_action');
            if( $link ): 
                $link_url = $link['url'];
                $link_title = $link['title'];
                $link_target = $link['target'] ? $link['target'] : '_self';
                ?>
                <a class="button btn btn-primary main-color-bg self-center text-white" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>
        <?php endif; ?>



    </div>
</div>