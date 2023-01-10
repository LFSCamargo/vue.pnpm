<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import BottomShade from "./BottomShade.vue";

defineProps<{
  headingText?: string;
  subHeading?: string;
  pillInfo?: { url?: string; text: string; linkText?: string; path?: string };
}>();
</script>

<template>
  <div class="isolate">
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 sm:pt-48">
          <div>
            <div class="mb-4 flex justify-center w-full sm:mb-8 sm:w-none">
              <div
                v-if="pillInfo"
                class="relative gap-2 flex overflow-hidden rounded-full py-1 px-4 text-sm leading-6 ring-1 dark:ring-slate-700 ring-gray-900/10 hover:ring-gray-900/20"
              >
                <span>
                  {{ pillInfo.text }}
                </span>
                <a v-if="pillInfo.url" :href="pillInfo.url" class="text-brand">
                  {{ pillInfo.linkText || "Check it out" }}
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <router-link
                  v-if="pillInfo.path"
                  :to="pillInfo.path"
                  class="text-brand"
                >
                  {{ pillInfo.linkText || "Check it out" }}
                  <span aria-hidden="true">&rarr;</span>
                </router-link>
              </div>
            </div>
            <div>
              <h1
                class="text-4xl font-bold tracking-tight text-center sm:text-6xl"
              >
                {{ headingText }}
              </h1>
              <p class="mt-4 leading-8 text-center">
                {{ subHeading }}
              </p>
              <slot />
            </div>
          </div>
          <BottomShade />
        </div>
      </div>
    </main>
  </div>
</template>
