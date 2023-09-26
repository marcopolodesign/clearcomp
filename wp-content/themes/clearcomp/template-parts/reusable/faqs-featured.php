
<div class="faq-featured-extract faq-container container my-10 flex items-start column-mobile">
    <div class="w-[30%]">
        <h2 class="mb-5 text-6xl">Frecuently asked Q's</h2>
        <a href="/faq" class="btn btn-primary bg-main-color block text-white w-max">View All</a> 
    </div>
 
    <div class="featured-faq-container flex flex-col justify-between items-start w-[60%] mr-0 ml-auto">
    <?php  if( have_rows('main_faq', 126) ): while ( have_rows('main_faq', 126) ) 
    : the_row(); if (get_sub_field('question')):?>
        <div class="faq-item pa4 mb4 w-full center mb-20 last:mb-0 border-b-[1px] border-b-black hover:border-b-[var(--mainColor)] pb-5" area-expanded="false">
            <h2 class="faq-question text-3xl flex jic"><?php the_sub_field('question'); ?> <?php get_template_part('template-parts/assets/arrow');?> </h2>
            <div class="faq-answer">
                <p class="text-gray-800 text-xl"><?php the_sub_field('answer'); ?></p>
            </div>  
        </div>
    <?php endif; endwhile; endif;?>
    </div> 
</div>


<style>
    .faq-item {
        /* border: 1px solid var(--mainColor); */
        /* border-radius: 8px; */
    }
</style>