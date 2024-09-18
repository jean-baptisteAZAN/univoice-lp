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
      { icon: Phone, text: '+33 7 87 44 14 56' },
      { icon: Mail, text: 'contact@univoice-ai.com' },
    ];
</script>

<IntersectionObserver once element={formElement} bind:intersecting threshold={0.1}>
    <section bind:this={formElement} class="relative bg-black overflow-hidden py-20 mt-20">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#ffffff30_0%,transparent_70%)] z-10"/>
        <div class="relative z-10 container mx-auto px-4">
        {#if intersecting}
            <div in:fly="{{ y: -50, duration: 1000, delay: 200 }}" class="text-center flex flex-col items-center justify-center gap-2">
                <p class=" bg-[#272827] p-4 inline-flex items-center rounded-lg font-onest font-light text-white">
                    <span class="w-2 h-2 bg-[#c3f261] rounded-full mr-2"></span>
                    Contactez-nous
                </p>
                <h1 class="text-2xl sm:text-4xl md:text-5xl font-extralight mb-6 max-w-5xl font-onest text-white">
                    Faites passer votre entreprise au niveau supérieur avec UniVoice
                </h1>
                <p class="text-lg md:text-lg mb-8 max-w-2xl font-onest text-gray-400">
                    Inscrivez-vous à une démonstration avec notre équipe commerciale pour voir ce que univoice peut faire pour votre entreprise.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div in:fly="{{ x: -50, duration: 1000, delay: 400 }}" class="py-5 md:py-0 md:px-5">
                    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                        <div class="flex flex-row items-center justify-center w-full gap-4">
                            <div class="w-full">
                                <input type="text" id="name" bind:value={name} required placeholder="Nom"
                                        class="w-full rounded-lg bg-[#272827] p-4 text-white ">
                            </div>
                            <div class="w-full">
                                <input type="email" id="email" bind:value={email} required placeholder="Email"
                                        class="w-full rounded-lg bg-[#272827] p-4 text-white ">
                            </div>
                        </div>
                    <div>
                        <textarea id="message" bind:value={message} rows="4" required placeholder="Message"
                                  class="w-full rounded-lg bg-[#272827] p-4 text-white "/>
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
