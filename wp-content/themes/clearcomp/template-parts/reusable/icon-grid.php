<div class="flex column-mobile justify-between gap-5 border-y-2 border-y-gray-400 mt-10 about-icon-grid group">
    <div class="w-1/4 p-10 h-max m-auto">
        <?php get_template_part('template-parts/assets/experience'); ?>
        <h3 class="text-[var(--mainColor)] mb-2 text-2xl mt-10 group-hover:text-[var(--mainColor)] smooth-t font-medium">Experience</h3>
        <p class="text-gray-600 smooth-t group-hover:text-[var(--mainColor)] ">+38 year tracking performance and calculating commissions</p>
    </div>

    <div class="w-1/4 p-10">
        <?php get_template_part('template-parts/assets/speed'); ?>
        <h3 class="text-[var(--mainColor)] mb-2 text-2xl mt-10 font-medium">Speed</h3>
        <p class="text-gray-600">We respond to our client’s needs at an unusual speed.</p>
    </div>

    <div class="w-1/4 p-10">
        <?php get_template_part('template-parts/assets/craftmanship'); ?>
        <h3 class="text-[var(--mainColor)] font-medium mb-2 text-2xl mt-10">Craftmanship</h3>
        <p class="text-gray-600">We designed our platform to fully adapt to out clients needs, not the other way round.</p>
    </div>

    <div class="w-1/4 p-10 ">
        <?php get_template_part('template-parts/assets/security'); ?>
        <h3 class="text-[var(--mainColor)] font-medium mb-2 text-2xl mt-10">Security</h3>
        <p class="text-gray-600">We are AICPA SOC1 and SOC2 certificated and are regularly audited to ensure compliance</p>
    </div>
</div>


<style>
    .about-icon-grid svg {
        height: 80px !important;
        width: 100px !important;
    }
</style>