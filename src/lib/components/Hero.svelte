<script>
    import Maincta from '$lib/components/Maincta.svelte';
    const marqueeItems = [
        "/hubspot.png",
        "/twilio.png",
        "/zapier.png",
        "/microsoft.png"
    ];
    const marqueeLoop = [...marqueeItems, ...marqueeItems];
</script>

<section class="relative h-fit py-5 md:py-10 bg-black overflow-hidden mt-20">
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-50"/>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ffffff30_0%,transparent_70%)] z-10"/>

    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <div class="uppercase bg-[#272827] p-2 sm:p-4 flex flex-row items-center rounded-lg font-onest font-light">
            <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
            Assistant vocal IA
        </div>
        <h1 class="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 max-w-5xl font-onest">
            Nous créons des agents vocaux intelligents sur mesure pour vos besoins.
        </h1>
        <p class="text-lg md:text-lg mb-8 max-w-2xl font-onest text-gray-300">
            Notre IA optimise vos appels, améliorant l'engagement, la satisfaction et la réactivité de vos services.
        </p>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <a href="/contact" class="px-6 py-3 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors text-lg">
        Contactez-nous
        </a>
        <Maincta />
    </div>
    <img src="/eura.jpg" alt="Nous sommes partenaires d'Euratechnologies" class="w-48 rounded-lg mt-10" />
    <p class="text-center text-2xl font-onest font-light mt-10">
        Approuvé par
    </p>
    <div class="relative overflow-hidden max-w-6xl  md:mt-8">
        <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div class="flex animate-marquee whitespace-nowrap">
            {#each marqueeLoop as item, i}
                <img src={item} class="w-40 mx-10 object-contain" alt="Nos partenaires"/>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    .animate-marquee {
        animation: marquee 20s linear infinite;
    }
</style>
