<script setup lang="ts">
import { Heading } from "@core/components";

import { Tailwind, XState, Vue, Vite, PNPM } from "@core/assets";
import { BoltIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <Heading
    :pill-info="{
      text: 'Github Repository',
      url: 'http://github.com/LFSCamargo/vue.pnpm',
      linkText: 'Check it out',
    }"
    heading-text="Vue + PNPM Monorepo."
    sub-heading="Welcome To Tailwind UI + Vue + PNPM Monorepo, a Repository made to help others to get started with vue and pnpm"
  />
  <div class="py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-brand">
          We've built this to make it easier for you to get started on your next
          project.
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          The Template of your Dreams
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8"></p>
      </div>

      <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
        >
          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/globe-alt -->
              <Tailwind class="w-8" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">Tailwind CSS</p>
              <p class="mt-2 text-base leading-7">
                We've also included Tailwind CSS, a utility-first CSS framework
                that makes it easy to create consistent, responsive designs.
                With Tailwind, you can quickly prototype and build beautiful,
                functional UI's without having to write custom CSS.
              </p>
            </div>
          </div>

          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/scale -->
              <XState class="w-8" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">XState</p>
              <p class="mt-2 text-base leading-7">
                We've included Xstate. It's a library that allows you to manage
                state and logic in your application, without the need for
                complex reducers and actions. Xstate makes it easy to understand
                and reason about the different states and transitions in your
                app, making it more maintainable in the long run.
              </p>
            </div>
          </div>

          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/bolt -->
              <Vue class="w-8" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">VueJS</p>
              <p class="mt-2 text-base leading-7">
                Built with Vue.js, a progressive JavaScript framework for
                building user interfaces. It's lightweight and easy to use,
                making it the perfect choice for building fast and efficient web
                apps.
              </p>
            </div>
          </div>

          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/device-phone-mobile -->
              <Vite class="w-6" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">Vite</p>
              <p class="mt-2 text-base leading-7">
                Created by Evan You, Vite JS is a no bundler dev environment for
                Vue. js. It speeds up the front-end development experience of an
                application. Vite delivers your code via native ES Module
                imports during development, allowing you to create Vue.
              </p>
            </div>
          </div>

          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <!-- Heroicon name: outline/bolt -->
              <PNPM class="w-6" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">PNPM</p>
              <p class="mt-2 text-base leading-7">
                We've also included Pnpm as the package manager. Pnpm is a fast
                and efficient package manager that can save you a lot of time
                and disk space. It also makes it easy to manage your
                dependencies and also manages well the workspaces that is the
                main piece of a monorepo
              </p>
            </div>
          </div>

          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white sm:shrink-0"
            >
              <BoltIcon class="w-6" />
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8">Vite Pages</p>
              <p class="mt-2 text-base leading-7">
                We've included a File system based routing for Vue 3 called
                <a
                  class="underline"
                  href="https://github.com/hannoeru/vite-plugin-pages"
                >
                  Vite Plugin Pages
                </a>
                <br />
                So any .vue file inside the folder inside any of the modules
                located in:
                <span
                  class="text-sm font-mono w-auto text-white bg-slate-600 px-1 mr-1 py-1 pl-3 rounded-md"
                >
                  src/modules/**/pages
                </span>
                Will be a single route inside our Vue Router
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
