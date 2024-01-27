<template>
  <main class="relative h-screen font-sans bg-black">
    <navBar class="fixed z-10 w-full" />
    <video autoplay muted class="fixed w-full h-full">
      <source src="/video/video.mp4" type="video/mp4" />
    </video>
    <section class="fixed z-20 flex gap-10 text-white bottom-36 left-48">
      <div class="flex flex-col w-full gap-14">
        <span class="text-xl">(1)</span>
        <h1 class="text-8xl">
          MODULE ONE<sup class="text-4xl">TM</sup> HOMEBATTERY
        </h1>
        <nuxt-link to="/" class="text-lg underline">Coming soon</nuxt-link>
      </div>
      <div class="flex flex-col w-full gap-10 mx-32 mt-20 text-white">
        <h2 class="text-6xl">The Future Energy</h2>
        <p class="text-xl">
          Experience the future of energy now, with a special launch offer of
          $1650 for our ModulOne
        </p>
        <button
          class="flex gap-10 px-4 py-4 text-2xl text-black w-fit rounded-3xl bg-emerald"
        >
          Pre Order Now
          <icon name="solar:arrow-right-up-bold" size="40px" />
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
