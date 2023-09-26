<div class="container  my-<?php the_sub_field('margin');?>">
    <div class="flex jic pb-3 border-b border-b-black">
        <h4 class="text-black uppercase font-semibold"><?php the_sub_field('title');?></h4>
        <p>Tip: Hover over each wording to learn more</p>
    </div>

    <div class="flex justify-between items-start mt-10">
        <div class="w-1/2 about-cc-text">
            <div class="black text-3xl font-medium leading-normal ">
                <span>ClearComp is the perfect</span> <span class="text-[var(--mainColor)] underline anchor">tailor made data driven</span> <span>solution to</span> <span class="text-[var(--mainColor)] underline anchor">motivate your sales team,</span> <span>through a</span> <span class="text-[var(--mainColor)] underline anchor">unified platform</span><span>, to make</span> <span class="text-[var(--mainColor)] underline anchor">tracking and payroll effortless</span> <span> with intuitive dashboards and reporting, supported by real people with extensive expertise.</span> 
            </div>

            <a href="/about" class="btn btn-primary bg-main-color text-white block w-max">Discover more</a>
        </div>

        <div class="w-2/5 relative">
        <?php if( have_rows('content') ): while ( have_rows('content') ): the_row(); ?>
        
            <div class="absolute top-0 right-0 bg-white shadow-lg rounded-md p-5 opacity-0 translate-y-10 about-content o-0 smooth-t">
                <p class="text-4xl font-medium text-gray-800"><?php the_sub_field('description');?></p>
            </div>
        
        <?php endwhile; endif;?>
        </div>
    </div>

</div>