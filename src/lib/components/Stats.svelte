<script>
    import IntersectionObserver from 'svelte-intersection-observer';
    import { fade } from 'svelte/transition';

    let intersecting = false;
</script>


<section class="flex flex-col items-center justify-center text-white text-center">
    <h1 class="text-4xl md:text-5xl xl:text-7xl font-extralight mb-6 max-w-5xl font-onest leading-relaxed">
      Vos agents vocaux IA livrés directement dans votre entreprise.
    </h1>
    <p class="text-lg md:text-xl mb-4 max-w-2xl font-onest text-gray-300 text-center">
      Nous concevons des agents vocaux performants qui automatisent vos interactions téléphoniques, assurant la satisfaction client et une efficacité opérationnelle exceptionnelle.
    </p>
    <div class="flex flex-row items-center justify-between w-auto border-gray-300 border-2 rounded-lg px-10 py-20">
        <div class="flex flex-col items-center text-left justify-start w-1/2">
            <p class="text-2xl lg:text-5xl">
                Des rapports mensuels détaillés pour <span class="text-gray-300">améliorer votre service client.</span>
            </p>
        </div>
    </div>
</section>
