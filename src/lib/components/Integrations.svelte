<script>
    import Maincta from "$lib/components/Maincta.svelte";
    const integrations = [
      { name: 'Hubspot', category: 'CRM', logo: '/hubspot.png' },
      { name: 'Vonage', category: 'Opérateur', logo: '/hubspot.png' },
      { name: 'Open AI', category: 'LLM', logo: '/hubspot.png' },
      { name: 'Salesforce', category: 'CRM', logo: '/hubspot.png' },
      { name: 'Plivo', category: 'Opérateur', logo: '/hubspot.png' },
      { name: 'Google calendar', category: 'Agenda', logo: '/hubspot.png' },
      { name: 'Twilio', category: 'Opérateur', logo: '/hubspot.png' },
      { name: 'Mistral', category: 'LLM', logo: '/hubspot.png' },
      { name: 'Zapier', category: 'Intégrateur', logo: '/hubspot.png' },
    ];
  </script>

<section class="bg-black text-white py-16 px-4 md:px-8 lg:px-20 relative">
<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#ffffff30_0%,transparent_70%)] z-10"></div>
<div class="max-w-screen mx-auto flex flex-row gap-24 items-center">
    <div class="mb-8 w-[40%]">
        <p class="uppercase bg-[#272827] p-4 w-fit flex flex-row items-center rounded-lg font-onest font-light">
            <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
            Intégrations
        </p>
        <h2 class="font-onest font-extralight text-4xl md:text-5xl lg:text-6xl  mt-2 mb-4">
            Intégrations intelligentes à portée de main
        </h2>
        <button class="px-6 py-3 bg-transparent border border-white rounded-md hover:bg-white/10 transition-colors">
            Contactez-nous
        </button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-[60%]">
        {#each integrations as integration}
            <div class="bg-[#1c1c1c] p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <img src={integration.logo} alt={integration.name} class="w-12 h-12 mb-2" />
            <h3 class="text-lg font-semibold">{integration.name}</h3>
            <p class="text-sm text-gray-400">{integration.category}</p>
            </div>
        {/each}
    </div>
</div>
</section>