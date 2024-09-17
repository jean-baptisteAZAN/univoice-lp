<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Stats from '$lib/components/Stats.svelte';
    import CardsList from '$lib/components/CardsList.svelte';
    import Integrations from '$lib/components/Integrations.svelte';
    import FinalCard from '$lib/components/FinalCard.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import BeContacted from '$lib/components/BeContacted.svelte';
</script>

<Navbar />
<Hero />
<BeContacted />
<!-- <Stats /> -->
<CardsList />
<Integrations />
<FinalCard />
<Footer />
