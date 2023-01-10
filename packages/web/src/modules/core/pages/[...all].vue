<script setup lang="ts">
import { Heading } from "../components";
</script>

<template>
  <Heading
    heading-text="Not Found"
    :pill-info="{
      text: 'Get Back to the home page?',
      linkText: 'Get Back',
      path: '/',
    }"
    sub-heading="Oops looks like you got lost, this page that you are looking for doesn't exists"
  />
</template>
