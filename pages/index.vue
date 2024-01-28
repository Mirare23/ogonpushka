<template>
  <main class="h-screen font-sans bg-black">
    <div class="relative h-screen">
      <navBar class="absolute z-10 w-full" />
      <video autoplay muted class="absolute w-full h-full">
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <section
        ref="section"
        class="absolute z-20 flex gap-10 text-white bottom-36 left-48"
      >
        <div class="flex flex-col w-full gap-14">
          <span class="text-xl">(1)</span>
          <h1 class="font-semibold text-8xl">
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
          <btn />
        </div>
      </section>
    </div>
    <section class="min-h-screen py-20 bg-gray">
      <div class="container flex">
        <div
          ref="image"
          class="grid w-7/12 h-full grid-cols-2 gap-4 rounded-3xl"
        >
          <figure class="col-span-2">
            <img
              src="/img/img.jpg"
              class="object-cover w-full h-full rounded-3xl"
              alt=""
            />
          </figure>
          <figure class="rounded-3xl">
            <img
              src="/img/img.jpg"
              class="object-cover w-full h-full rounded-3xl"
              alt=""
            />
          </figure>
          <figure class="rounded-3xl">
            <img
              src="/img/img.jpg"
              class="object-cover w-full h-full rounded-3xl"
              alt=""
            />
          </figure>
        </div>
        <div class="flex flex-col w-5/12 justify-evenly ps-36">
          <div class="flex flex-col text-white gap-7">
            <span class="text-gray2">(2)</span>
            <h1 class="text-6xl font-semibold text-white">
              MODULE ONE<sup class="text-xl">TM</sup> HOMEBATTERY
            </h1>
            <nuxt-link to="/" class="underline text-gray2"
              >Coming soon</nuxt-link
            >
          </div>
          <div class="flex flex-col gap-8">
            <div class="text-white">
              <h2 class="text-2xl">Easy Installation</h2>
              <p class="mt-4 text-lg text-gray2 pe-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptatum facere placeat itaque optio voluptates porro in
                natus! Reiciendis atque adipisci ab nemo error itaque veritatis,
                saepe blanditiis vitae assumenda.
              </p>
            </div>
            <div class="text-white">
              <h2 class="text-2xl">Reduce Costs</h2>
              <p class="mt-4 text-lg text-gray2 pe-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                voluptatum facere placeat itaque optio voluptates porro in
                natus! Reiciendis atque adipisci ab nemo error itaque veritatis,
                saepe blanditiis vitae assumenda.
              </p>
            </div>
          </div>
          <btn />
        </div>
      </div>
    </section>
    <section class="h-screen bg-gray">
      <div class="container flex h-full py-20">
        <div class="flex flex-col w-3/4 h-full gap-20">
          <div class="h-5/6">
            <div class="sticky flex top-20 gap-14">
              <span class="text-gray2">(03)</span>
              <h1 class="text-4xl font-semibold text-white">
                TAKE BACK CONTROL <br />
                OF YOUR POWER.
              </h1>
            </div>
          </div>
          <div class="h-1/6">
            <div
              class="sticky bottom-0 flex justify-center text-white pe-64 left-1/2 gap-14"
            >
              <nuxt-link
                to="/"
                class="flex items-center w-fit gap-10 border-b-[1px] pb-1"
                >Discover module one <icon name="ci:arrow-up-right-lg" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <ul class="w-full h-full">
          <li
            v-for="n in 10"
            class="flex justify-between border-b-[1px] border-gray2 py-4 mt-4"
          >
            <h3 class="text-white">Capacity</h3>
            <p class="text-gray2">1500Wh</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="container flex min-h-screen gap-20 py-40 bg-white">
      <div class="flex flex-col w-7/12">
        <div class="flex gap-14 h-1/2">
          <span class="text-gray2">(03)</span>
          <h1 class="text-4xl font-semibold text-black pe-40">
            START YOUR JOURNEY TOWARD ENERGY INDEPEDENCE
          </h1>
        </div>
        <div ref="image4" class="flex gap-5 h-1/2">
          <figure class="rounded-3xl">
            <img
              src="/img/img.jpg"
              class="object-cover w-full h-full rounded-3xl"
              alt=""
            />
          </figure>
          <figure class="flex items-end rounded-3xl">
            <img
              src="/img/img.jpg"
              class="object-cover w-full h-3/4 rounded-3xl"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div class="flex flex-col w-5/12">
        <div class="flex flex-col gap-10 pb-10 border-gray2 border-b-[1px]">
          <h1 class="text-4xl">Self Consumption</h1>
          <p class="text-gray2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            exercitationem, sunt placeat illo molestias doloribus optio incidunt
            laudantium voluptates tempora porro fuga quam architecto quod ipsa
            quibusdam blanditiis provident eligendi.
          </p>
        </div>
        <div class="flex flex-col gap-10 py-10 border-gray2 border-b-[1px]">
          <h1 class="text-4xl">Self Consumption</h1>
          <p class="text-gray2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            exercitationem, sunt placeat illo molestias doloribus optio incidunt
            laudantium voluptates tempora porro fuga quam architecto quod ipsa
            quibusdam blanditiis provident eligendi.
          </p>
        </div>
        <div class="flex flex-col gap-10 py-10 border-gray2 border-b-[1px]">
          <h1 class="text-4xl">Self Consumption</h1>
          <p class="text-gray2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            exercitationem, sunt placeat illo molestias doloribus optio incidunt
            laudantium voluptates tempora porro fuga quam architecto quod ipsa
            quibusdam blanditiis provident eligendi.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import gsap from "gsap"
import Lenis from "@studio-freight/lenis"
import ScrollTrigger from "gsap/ScrollTrigger"
const section = ref(null)
const image = ref(null)
const image4 = ref(null)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from(section.value.children, {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    stagger: 0.5,
  })

  gsap.from(image.value.children, {
    scrollTrigger: {
      trigger: image.value.children,
      scrub: true,
      start: "top center",
      end: "+=800",
    },
    autoAlpha: 0,
    x: -200,
    stagger: 0.5,
  })

  gsap.from(image4.value.children, {
    scrollTrigger: {
      trigger: image4.value.children,
      scrub: true,
      start: "top 80%",
      end: "+=300",
    },
    autoAlpha: 0,
    x: -200,
    stagger: 0.5,
  })
})
</script>
