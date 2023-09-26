<?php get_header(); ?>

<div data-barba="container" class="about" data-barba-namespace="about" data-header-color="dark">
   
    <div class="flex jic pb-3 container border-b-[1px] border-b-black mt-[160px] pt-20">
        <h1 class="text-black uppercase font-semibold">About us & our mission</h1>
        <!-- <p>Tip: Hover over the iceberg to learn more</p> -->
    </div>

    <div class="relative container my-14">
        <h2 class="gradient-text text-7xl w-3/4 font-normal">We developed a platform for enhancing sales performance and boosting team motivation.</h2>
        <div class="absolute top-0 right-0">
            <?php get_template_part('template-parts/assets/texture-rounded'); ?>
        </div>
    </div>


    <div class="container mt-52">
        <div class="flex flex-col relative">
            <h2 class="text-6xl text-gray-800 mb-5 w-3/4">Adapting and evolving with clients</h2>
             <?php get_template_part('template-parts/reusable/icon-grid'); ?>

             <div class="w-full flex jic">
                <div class="w-1/5 relative h-[250px]">
                    <?php get_template_part('template-parts/assets/texture-hexagon'); ?>
                </div>
                <div class="w-3/4 ml-auto mr-0 mt-10 ">
                        <p class="w-3/4 mr-0 ml-auto leading-normal text-2xl text-[var(--mainColor)] indent-8"><b>Since 1985</b> we have been digging deep to understand our customers’ needs and we get it done for them.<br><br>
                        Our internal software development team is dedicated to remaining <b>agile, adaptable, responsive and flexible</b> to enhance our customers’ businesses.
                        <br><br>
                        Because being <b>knee-deep in every aspect of the services we provide</b> – from the development of the software to the front-line support of it – is paramount to us.</p>
                </div>

            
             </div>
             
           
        </div>
    </div>

    <div class="container my-20">
        <div class="flex items-stretch gap-3">
            <h2 class="bg-gray-200 hover:bg-[var(--secondaryColor)] smooth-t text-gray-800 py-10 text-5xl w-[70%] rounded-lg text-center">Committed for the long term.</h2>
            <a href="#contact" class="bg-gray-200  py-10 w-[30%] rounded-lg flex hover:bg-[var(--mainColor)] hover:text-white smooth-t">
                <p class="text-center text-gray-800 text-2xl m-auto font-medium  hover:text-white smooth-t">Request Live Demo</p>
            </a>
        </div>

        <div class="flex gap-3 items-start mt-3">
            <div class="bg-gray-200  hover:bg-[var(--secondaryColor)] rounded-lg p-10 w-1/3 smooth-t">
                <h2 class="text-2xl text-gray-800 mb-2 font-medium">Real People</h2>
                <p class="text-gray-600">We bring it every day. We act with integrity, authenticity, and ingenuity to build partnerships that last. When you work with ClearComp, YOU are the priority</p>
            </div>

            <div class="bg-gray-200 hover:bg-[var(--secondaryColor)] smooth-t rounded-lg p-10 w-1/3">
                <h2 class="text-2xl text-gray-800 mb-2 font-medium">Count On Us</h2>
                <p class="text-gray-600">We are agile, responsive, and adapt to the ever-changing business strategies of our customers to continually deliver a flexible, comprehensive solution our clients can count on.</p>
            </div>

            <div class="bg-gray-200 hover:bg-[var(--secondaryColor)] smooth-t rounded-lg p-10 w-1/3">
                <h2 class="text-2xl text-gray-800 mb-2 font-medium">As Industry Leaders</h2>
                <p class="text-gray-600">That commitment has set us up to be an industry leader thanks to our long-standing partnerships. We’re focused on providing the highest possible level of service for companies of any size.</p>
            </div>
        </div>

        <div class="mt-3">
            <h2 class="bg-gray-200 hover:bg-[var(--secondaryColor)] smooth-t text-gray-800 p-10 text-5xl w-full rounded-lg">Not just devs. People that understand commissions, sales performance and the pressures that the environment involves and requires.</h2>
        </div>
    </div>
  

    <?php 
    get_template_part('template-parts/reusable'); 
    
    if (get_field('main_faq') && !is_page('faq')) :
        get_template_part('template-parts/reusable/faqs-featured');
    endif;?>

</div> <!-- End Barba Container -->
<?php get_footer(); ?>


<!-- Title & CTa -->
<!-- Video -->
