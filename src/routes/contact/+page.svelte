<script>
    import { fade, fly } from 'svelte/transition';
    import { Send, Phone, Mail, MapPin } from 'lucide-svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    let formElement;
    let intersecting = false;
    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
      // Handle form submission logic here
      console.log({ name, email, message });
      // Reset form fields
      name = '';
      email = '';
      message = '';
    }
    const contactInfo = [
      { icon: Phone, text: '+33 1 23 45 67 89' },
      { icon: Mail, text: 'contact@votreentreprise.com' },
      { icon: MapPin, text: '123 Rue de l\'Innovation, 75000 Paris' },
    ];
</script>

<IntersectionObserver once element={formElement} bind:intersecting threshold={0.1}>
    <section bind:this={formElement} class="relative bg-black overflow-hidden py-20 mt-20">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#ffffff30_0%,transparent_70%)] z-10"></div>
        <div class="relative z-10 container mx-auto px-4">
        {#if intersecting}
            <div in:fly="{{ y: -50, duration: 1000, delay: 200 }}" class="text-center mb-12">
            <p class=" bg-[#272827] p-4 inline-flex items-center rounded-lg font-onest font-light text-white">
                <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
                Contactez-nous
            </p>
            <h1 class="text-4xl md:text-5xl xl:text-7xl font-extralight mt-6 text-white font-onest">
                Parlons de votre projet
            </h1>
            <p class="text-lg md:text-xl mt-4 text-gray-300 font-onest max-w-2xl mx-auto">
                Nous sommes là pour répondre à vos questions et vous aider à transformer votre service client avec l'IA.
            </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div in:fly="{{ x: -50, duration: 1000, delay: 400 }}" class="bg-[#272827] p-8 rounded-lg">
                <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-300">Nom</label>
                    <input type="text" id="name" bind:value={name} required
                            class="mt-1 block w-full rounded-md bg-[#272827] border-2 border-[#7f896b] text-white focus:ring focus:ring-[#c3f261] focus:ring-opacity-50">
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" bind:value={email} required
                            class="mt-1 block w-full rounded-md bg-[#272827] border-2 border-[#7f896b] text-white focus:ring focus:ring-[#c3f261] focus:ring-opacity-50">
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" bind:value={message} rows="4" required
                    class="mt-1 block w-full rounded-md bg-[#272827] border-2 border-[#7f896b] text-white focus:ring focus:ring-[#c3f261] focus:ring-opacity-50"></textarea>
                </div>
                <button type="submit" class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-[#c3f261] hover:bg-[#d4ff7d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c3f261] transition-colors">
                    Envoyer <Send class="ml-2 w-5 h-5" />
                </button>
                </form>
            </div>
            <div in:fly="{{ x: 50, duration: 1000, delay: 600 }}" class="space-y-8">
                {#each contactInfo as { icon, text }}
                <div class="flex items-center space-x-4 text-white">
                    <div class="bg-[#272827] p-4 rounded-full">
                    <svelte:component this={icon} class="w-6 h-6 text-[#c3f261]" />
                    </div>
                    <span class="text-lg">{text}</span>
                </div>
                {/each}
            </div>
            </div>
        {/if}
        </div>
    </section>
</IntersectionObserver>