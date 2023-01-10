<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleLightSwitch = useToggle(isDark);
</script>

<template>
  <div
    @click="toggleLightSwitch()"
    class="flex p-2 h-10 w-10 flex-none cursor-pointer items-center justify-center rounded-xl ring-1 text-brand dark:ring-slate-700 ring-gray-200 backdrop-blur-3xl"
  >
    <MoonIcon class="h-5 w-5" v-if="isDark" />
    <SunIcon class="h-6 w-6" v-if="!isDark" />
  </div>
</template>
