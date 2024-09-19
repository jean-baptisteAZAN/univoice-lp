<script>
    import Hero from '$lib/components/Hero.svelte';
    import Stats from '$lib/components/Stats.svelte';
    import CardsList from '$lib/components/CardsList.svelte';
    import Integrations from '$lib/components/Integrations.svelte';
    import FinalCard from '$lib/components/FinalCard.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import BeContacted from '$lib/components/BeContacted.svelte';
</script>

<Hero />
<BeContacted />
<CardsList />
<Integrations />
<FinalCard />

<section class="flex flex-col  max-w-7xl mx-auto">
    <h3 class="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 max-w-5xl font-onest text-center md:text-left text-white ml-5">
        Évoluez avec sérénité
    </h3>
    <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <div class="flex flex-row gap-4 w-full">
            <img src="/gdpr.png" alt="GDPR" class="object-contain w-20 md:w-36 bg-white rounded-lg p-2">
            <img src="/hipaa.png" alt="HIPAA" class="object-contain w-20 md:w-36 bg-white rounded-lg p-2">
            <img src="/aicpa.png" alt="SOC 2 Type 1" class="object-contain w-20 md:w-36 bg-white rounded-lg p-2">
        </div>
        <p class="text-gray-400 w-auto p-5 md:p-0 md:w-[60%] text-center md:text-left">
            Univoice est conforme aux normes SOC 2 Type 1,
            HIPAA et GDPR, certifié par les meilleures
            normes du secteur.
        </p>
    </div>

</section>
