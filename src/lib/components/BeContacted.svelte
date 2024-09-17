<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { fade, fly, scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import Maincta from '$lib/components/Maincta.svelte';
    import { Calendar, ChevronRight } from 'lucide-svelte';
    import { onMount } from 'svelte';

    let ctaElement;
    let intersecting = false;
    let calendlyLoaded = false;

    function loadCalendly() {
        if (!calendlyLoaded) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.onload = () => {
                calendlyLoaded = true;
            };
            document.head.appendChild(script);
        }
    }
    onMount(() => {
        loadCalendly();
    });
</script>

<IntersectionObserver once element={ctaElement} bind:intersecting threshold={0.1}>
  <section bind:this={ctaElement} class="relative py-20 bg-black text-white overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#ffffff30_0%,transparent_70%)] z-10"></div>
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] opacity-40"/>
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          {#if intersecting}
            <div in:fly="{{ y: 50, duration: 1000, delay: 200 }}" class="inline-flex items-center bg-[#272827] px-4 py-2 rounded-full">
              <Calendar class="w-5 h-5 mr-2 text-[#c3f261]" />
              <span class="font-onest font-light uppercase">Prenez rendez-vous</span>
            </div>
            <h2 in:fly="{{ y: 50, duration: 1000, delay: 400 }}" class="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 max-w-5xl font-onest">
              Transformez vos <span class="text-[#c3f261]">interactions vocales</span> avec l'IA
            </h2>
            <p in:fly="{{ y: 50, duration: 1000, delay: 600 }}" class="text-lg md:text-xl font-onest text-gray-300">
              Découvrez comment notre technologie d'IA vocale peut révolutionner votre service client et optimiser vos opérations.
            </p>
            <div in:fly="{{ y: 50, duration: 1000, delay: 800 }}" class="flex flex-col sm:flex-row w-fit gap-4 ">
              <Maincta />
              <a href="#Caracteristics" class="group px-6 py-3 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors font-onest flex items-center">
                En savoir plus
                <ChevronRight class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          {/if}
        </div>
        <div class="relative">
          {#if intersecting}
            <div in:scale="{{ duration: 1000, delay: 1000, easing: elasticOut }}" class="bg-[#272827] rounded-lg p-8 shadow-xl">
              <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/matthieu-hubert/30min"
                style="min-width:320px;height:630px;">
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
</IntersectionObserver>

<style>
  /* You can add any additional styles here if needed */
</style>