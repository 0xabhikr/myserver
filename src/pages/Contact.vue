<template>
  <t-alert theme="warning" message="This site is under development" style="margin: 15px;" />
  <t-card header="Contact" style="margin: 15px; font-family: 'Oxanium', sans-serif; font-style: italic;">
    <t-space direction="vertical" size="large">
      <p>You can reach me via email or through social media links listed above.</p>
    </t-space>
  </t-card>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: 'Contact | Abhikr' });
</script>
