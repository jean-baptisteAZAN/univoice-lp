<script>
    import { TicketCheck, DollarSign, BoxIcon, Voicemail, LanguagesIcon, Link } from 'lucide-svelte';

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

<section class="relative bg-black overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#ffffff30_0%,transparent_70%)] z-10"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 space-y-5 md:space-y-14 text-center text-white mt-10 md:mt-0 py-5">
        <p class="uppercase bg-[#272827] p-4 flex flex-row items-center rounded-lg font-onest font-light">
            <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
            Característiques
        </p>
        <h1 class="text-4xl md:text-5xl xl:text-7xl font-extralight mb-6 max-w-5xl font-onest leading-relaxed">
            Apercu des fonctionnalités
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl font-onest text-gray-300">
            Libérez la puissance de l'IA pour transformer votre service client en une expérience dynamique, efficace et personnalisée qui distingue votre entreprise de commerce électronique.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 md:px-14">
            {#each cards as card}
                <div class=" p-4 rounded-lg shadow-md border-2 border-[#272827] flex flex-col text-left  space-y-2">
                    <svelte:component this={card.icon} class="w-10 h-10 text-white" />
                    <h2 class="text-xl font-semibold text-white">{card.title}</h2>
                    <p class="text-lg text-gray-400">{card.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
