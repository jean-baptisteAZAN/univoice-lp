<script>
    import { TicketCheck, DollarSign, BoxIcon, Voicemail, LanguagesIcon, Link } from 'lucide-svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import IntersectionObserver from "svelte-intersection-observer";

    let sectionElement;
    let intersecting = false;

    const cards = [
        {
            icon: TicketCheck,
            title: 'Gestion des rendez-vous automatisée',
            description: 'Planifiez, modifiez et confirmez des rendez-vous sans intervention humaine.'
        },
        {
            icon: DollarSign,
            title: 'Optimisation continue',
            description: 'Ajustement des agents en fonction des besoins et des retours.'
        },
        {
            icon: BoxIcon,
            title: 'Rapports mensuels',
            description: 'Accédez à des rapports mensuels détaillés pour suivre l\'évolution de votre service.'
        },
        {
            icon: Voicemail,
            title:'Création d\'agents vocaux personnalisés',
            description: 'Créez des agents vocaux personnalisés pour répondre à vos besoins spécifiques.'
        },
        {
            icon: LanguagesIcon,
            title: 'Service client multilingue',
            description: 'Des agents capables de gérer les interactions dans plusieurs langues pour une portée internationale.'
        },
        {
            icon: Link,
            title: 'Transfert vers des agents humains',
            description: 'Les appels complexes sont transférés directement à vos équipes.'
        }
    ]
</script>

<IntersectionObserver once element={sectionElement} bind:intersecting threshold={0.1}>
    <section id="Caracteristics" bind:this={sectionElement} class="relative bg-black overflow-hidden md:py-20">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#ffffff30_0%,transparent_70%)] z-10"></div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 space-y-5 md:space-y-14 text-center text-white mt-10 md:mt-0 py-5">
            {#if intersecting}
                <p in:fly="{{ y: -50, duration: 1000, delay: 200 }}" class="uppercase bg-[#272827] p-4 flex flex-row items-center rounded-lg font-onest font-light">
                    <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
                    Caractéristiques
                </p>
                <h1 in:fly="{{ y: 50, duration: 1000, delay: 400 }}" class="text-4xl md:text-5xl xl:text-7xl font-extralight mb-6 max-w-5xl font-onest leading-relaxed">
                    Aperçu des fonctionnalités
                </h1>
                <p in:fly="{{ y: 50, duration: 1000, delay: 600 }}" class="text-lg md:text-xl mb-8 max-w-2xl font-onest text-gray-300">
                    Libérez la puissance de l'IA pour transformer votre service client en une expérience dynamique, efficace et personnalisée qui distingue votre entreprise de commerce électronique.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 md:px-14 w-full">
                    {#each cards as card, index}
                        <div
                            in:scale="{{ duration: 600, delay: 800 + index * 100, easing: quintOut }}"
                            class="p-4 rounded-lg shadow-md border-2 border-[#272827] flex flex-col text-left space-y-2 transition-all duration-300 hover:bg-gray-900 hover:border-[#c3f261] hover:scale-105"
                        >
                            <svelte:component this={card.icon} class="w-10 h-10 text-[#c3f261]" />
                            <h2 class="text-xl font-semibold text-white">{card.title}</h2>
                            <p class="text-lg text-gray-400">{card.description}</p>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </section>
</IntersectionObserver>