<script>
    import { MoveUpRight, Menu, X } from 'lucide-svelte';
    import { fly } from 'svelte/transition';
    import Maincta from "$lib/components/Maincta.svelte";

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav class="bg-black shadow-md flex flex-row justify-between items-center w-screen py-5 px-4 sm:px-10 fixed top-0 left-0 right-0 z-50 h-20 md:h-auto">
    <p class="text-white text-2xl sm:text-4xl font-adlam">
        Univoice
    </p>
    <div class="hidden md:flex flex-row gap-10 text-gray-400 text-xl">
        <a href="/" class="hover:text-gray-200">
            Característiques
        </a>
        <a href="/" class="hover:text-gray-200">
            Intégrations
        </a>
        <a href="/" class="hover:text-gray-200">
            Contactez-nous
        </a>
    </div>
    <Maincta />

    <button on:click={toggleMenu} class="md:hidden text-white">
        {#if isMenuOpen}
            <X size={24} />
        {:else}
            <Menu size={24} />
        {/if}
    </button>
</nav>

{#if isMenuOpen}
    <div
        class="fixed inset-0 bg-black z-40 pt-20"
        transition:fly="{{ y: -100, duration: 300 }}"
    >
        <div class="flex flex-col items-center gap-6 text-white text-xl">
            <a href="/" class="hover:text-gray-200">Característiques</a>
            <a href="/" class="hover:text-gray-200">Intégrations</a>
            <a href="/" class="hover:text-gray-200">Contactez-nous</a>
            <Maincta />
        </div>
    </div>
{/if}