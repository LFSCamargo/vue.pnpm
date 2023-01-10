<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";

import { Bars3Icon, ChevronUpIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { navbarRoutes } from "@core/constants";
import LightSwitch from "./LightSwitch.vue";
</script>

<template>
  <Popover class="z-50 fixed top-0 left-0 right-0">
    <div
      class="mx-auto max-w-7xl px-6 border-b-[1px] backdrop-blur-xl dark:bg-black dark:bg-opacity-10 border-b-gray-100 dark:border-slate-700"
    >
      <div
        class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <img class="h-8 w-auto" src="/logo.svg" alt="" />
          </router-link>
        </div>
        <div class="-my-2 gap-2 flex items-center -mr-2 md:hidden">
          <ConnectWalletModal />
          <LightSwitch />
          <PopoverButton
            class="flex p-2 flex-none cursor-pointer items-center justify-center rounded-xl ring-1 text-brand ring-slate-900/10 dark:ring-slate-700 dark:bg-black backdrop-blur-3xl dark:bg-opacity-50 bg-offWhite bg-opacity-50"
          >
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup
          as="nav"
          class="hidden ring-1 ring-gray-200 dark:ring-slate-700 px-6 pl-8 py-3 rounded-full space-x-10 md:flex"
        >
          <div v-for="route in navbarRoutes" :key="route.title">
            <Popover
              v-if="!route.path && route.menuOptions"
              class="relative"
              v-slot="{ open }"
            >
              <PopoverButton
                :class="[
                  open
                    ? 'opacity-100 dark:opacity-100'
                    : 'opacity-50 dark:opacity-50',
                  'group inline-flex items-center rounded-md opacity-80 dark:opacity-70 text-base font-medium dark:hover:opacity-100 hover:opacity-100 focus:outline-none',
                ]"
              >
                <span>{{ route.title }}</span>
                <ChevronDownIcon
                  :class="['ml-2 h-5 w-5 group-hover:text-gray-500']"
                  aria-hidden="true"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <PopoverPanel
                  class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                >
                  <div
                    class="overflow-hidden rounded-3xl shadow-lg ring-1 dark:bg-black bg-offWhite ring-black dark:ring-slate-700 mt-2 ring-opacity-5"
                  >
                    <div class="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                      <div
                        class="gap-6"
                        v-for="item in route.menuOptions.items"
                        :key="item.name"
                      >
                        <a
                          v-if="item.url"
                          :href="item.comingSoon ? '' : item.url"
                          :class="
                            item.comingSoon
                              ? 'opacity-60 cursor-not-allowed'
                              : ''
                          "
                          class="-m-3 flex items-start rounded-lg p-3 transition-all hover:bg-gray-400 dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-50"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 flex-shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium">{{ item.name }}</p>
                            <p class="mt-1 text-sm">{{ item.description }}</p>
                          </div>
                        </a>
                        <router-link
                          v-if="item.path"
                          :to="item.comingSoon ? '' : item.path"
                          :class="
                            item.comingSoon
                              ? 'opacity-60 cursor-not-allowed'
                              : ''
                          "
                          class="-m-3 flex items-start rounded-lg p-3 transition-all hover:bg-gray-400 dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-50"
                        >
                          <component
                            :is="item.icon"
                            class="h-6 w-6 flex-shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium">{{ item.name }}</p>
                            <p class="mt-1 text-sm">{{ item.description }}</p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <router-link
              v-if="route.path"
              :to="route.path"
              class="group inline-flex items-center rounded-md opacity-80 dark:opacity-70 text-base font-medium dark:hover:opacity-100 hover:opacity-100 focus:outline-none"
            >
              {{ route.title }}
            </router-link>
          </div>
        </PopoverGroup>

        <div
          class="hidden gap-2 items-center justify-end md:flex md:flex-1 lg:w-0"
        >
          <LightSwitch />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 bg-offWhite dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6 h-full justify-between flex flex-col">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/logo.svg" alt="" />
              </div>
              <div>
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-4">
              <nav class="flex flex-col h-full gap-y-2">
                <div v-for="route in navbarRoutes" :key="route.title">
                  <a
                    v-if="route.path && !route.menuOptions"
                    :key="route.title"
                    :href="route.path"
                    class="flex w-full items-center rounded-lg bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-[0.03] px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                  >
                    <component
                      :is="route.icon"
                      class="h-6 w-6 flex-shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span class="ml-3 text-base font-medium">{{
                      route.title
                    }}</span>
                  </a>

                  <Disclosure
                    v-if="route.menuOptions && !route.path"
                    v-slot="{ open }"
                  >
                    <DisclosureButton
                      class="flex w-full justify-between items-center rounded-lg bg-black bg-opacity-5 dark:bg-white px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 dark:bg-opacity-[0.03]"
                    >
                      <div class="flex flex-row items-center">
                        <component
                          :is="route.icon"
                          class="h-6 w-6 flex-shrink-0 text-brand"
                          aria-hidden="true"
                        />
                        <span class="ml-3 text-base font-medium">{{
                          route.title
                        }}</span>
                      </div>
                      <ChevronUpIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="h-3 w-3 transition-all"
                      />
                    </DisclosureButton>
                    <transition
                      enter-active-class="duration-200 ease-out"
                      enter-from-class="opacity-0 scale-95"
                      enter-to-class="opacity-100 scale-100"
                      leave-active-class="duration-100 ease-in"
                      leave-from-class="opacity-100 scale-100"
                      leave-to-class="opacity-0 scale-95"
                    >
                      <DisclosurePanel
                        class="text-sm mt-3 px-3 scale-y py-2 flex flex-col bg-transparent gap-y-2"
                      >
                        <div
                          v-for="item in route.menuOptions.items"
                          :key="item.name"
                          class="gap-y-2"
                        >
                          <a
                            v-if="item.url"
                            :href="item.comingSoon ? '' : item.url"
                            :class="
                              item.comingSoon
                                ? 'opacity-60 cursor-not-allowed'
                                : ''
                            "
                            class="-m-3 flex items-start rounded-lg p-3 transition-all dark:bg-white dark:bg-opacity-10 hover:bg-opacity-50"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 flex-shrink-0 text-brand"
                              aria-hidden="true"
                            />
                            <div class="ml-4">
                              <p class="text-base font-medium">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm">{{ item.description }}</p>
                            </div>
                          </a>
                          <router-link
                            v-if="item.path"
                            :to="item.comingSoon ? '' : item.path"
                            :class="
                              item.comingSoon
                                ? 'opacity-60 cursor-not-allowed'
                                : ''
                            "
                            class="-m-3 flex items-start rounded-lg p-3 transition-all dark:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-50"
                          >
                            <component
                              :is="item.icon"
                              class="h-6 w-6 flex-shrink-0 text-brand"
                              aria-hidden="true"
                            />
                            <div class="ml-4">
                              <p class="text-base font-medium">
                                {{ item.name }}
                              </p>
                              <p class="mt-1 text-sm">{{ item.description }}</p>
                            </div>
                          </router-link>
                        </div>
                      </DisclosurePanel>
                    </transition>
                  </Disclosure>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
