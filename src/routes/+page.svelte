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

<section class="flex flex-row items-center justify-center max-w-7xl mx-auto gap-10">
    <div class="flex flex-col p-10 text-white w-[40%]">
        <h3 class="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 max-w-5xl font-onest">
            Évoluez avec sérénité
        </h3>
        <div class="flex flex-row gap-4">
            <img src="/gdpr.png" alt="GDPR" class="object-contain w-28 bg-white rounded-lg p-2">
            <img src="/hipaa.png" alt="HIPAA" class="object-contain w-28 bg-white rounded-lg p-2">
            <img src="/aicpa.png" alt="SOC 2 Type 1" class="object-contain w-28 bg-white rounded-lg p-2">
        </div>
    </div>
    <p class="text-gray-400 w-[60%]">
        Anna est conforme aux normes SOC 2 Type 1,
         HIPAA et GDPR, certifié par les meilleures
          normes du secteur.
    </p>
</section>

<Footer />
