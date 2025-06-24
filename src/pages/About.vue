<template>
  <t-alert theme="warning" message="This site is under development" style="margin: 15px;" />
  <t-card style="margin: 15px; font-family: 'Oxanium', sans-serif; font-style: italic;">
    <template #title>
      <h1
        style="font-size: 30px; margin-bottom: -60px; margin-top: -1px; font-weight: 400;font-family: 'Oxanium', sans-serif; ">
        About Me</h1>
    </template>

    <t-divider style="border-top-width: 2px; margin-top: 10px;" />

    <p style="font-size: 15px;">
      The sky is empty, the fruit is empty, and the star is patrolling. It's the same as today's. Let's go for a walk
      too.
    </p>

    <h1 style="font-size: 30px; margin-top: 30px; font-weight: 400; font-style: normal;">Abhikr | अभिषेक</h1>
    <t-divider style="border-top-width: 2px;" />

    <p style="font-size: 15px;">Communication language: Hindi, English. Learning Spanish</p>
    <p style="font-size: 15px;">Most used: Python, TypeScript, C-Sharp, Lua</p>
    <p style="font-size: 15px;">Interest: Hacking, vulnerability, AI, Cybersecurity</p>
    <p style="font-size: 15px;">
      A passionate developer with a strong interest in cybersecurity and a lifelong love for reading,
      continuously seeking opportunities to learn, grow, and innovate.
    </p>

    <t-divider style="border-top-width: 2px;" />

    <div style="margin-top: 1.5rem; display: flex; align-items: center;">
      <span style="font-size: 1rem; font-weight: 500; font-family: Oxanium;">Social Networks:</span>

      <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <logo-github-filled-icon style="font-size: 1.6rem; cursor: pointer;" />
      </a>

      <a href="https://instagram.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <logo-instagram-filled-icon style="font-size: 1.6rem; cursor: pointer;" />
      </a>
      <a href="https://t.me/AbhikrX" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-telegram" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>
      <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-linkedin" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>
      <a href="https://x.com/Abhikr_X" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fa-brands fa-x-twitter" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>
    </div>

    <t-divider style="border-top-width: 2px;" />

    <p style="font-size: 15px;">
      For project works see <router-link to="/projects">here</router-link>
    </p>
  </t-card>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import 'tdesign-vue-next/es/style/index.css';



import { LogoGithubFilledIcon, LogoInstagramFilledIcon } from 'tdesign-icons-vue-next';

useHead({
  title: 'About | Abhikr',
});
</script>
