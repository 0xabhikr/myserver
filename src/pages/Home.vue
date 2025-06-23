<template>
  <t-space>
    <t-sticky-tool type="compact" placement="right-center" :offset="[-80, 100]" style="position: fixed; z-index: 9999;"
      @click="handleClick" @hover="handleHover">
      <t-sticky-item :icon="renderChatIcon" popup="chat" />
      <t-sticky-item :icon="renderAddIcon" popup="add" />
      <t-sticky-item :icon="renderQrIcon" :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }" />
    </t-sticky-tool>
  </t-space>

  <t-alert theme="warning" message="This site is under development" style="margin: 15px;" />

  <!-- <t-card
    style="
      margin: 15px;
      font-family: 'Oxanium', sans-serif;
      font-style: italic;
      background-image: url('https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616297/bgbanner_mscnxc.jpg');
      background-size: cover;
      background-position: center;
      padding: 20px;
      min-height: 300px;
    "
  >
    <t-space direction="vertical" size="large">
      <div class="profile-container">
        <img
          src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616298/logo_lht9xi.jpg"
          alt="Abhikr's Profile"
          class="profile-image"
        />
        <div class="profile-info">
          <h2>Abhikr</h2>
          <p>
            Hi, I'm Abhikr! I'm passionate about Cyber Security and sharing my
            ideas through this blog so plz visit some times.
          </p>
        </div>
      </div>
    </t-space>
  </t-card>
  <t-card style=" 
      margin: 15px;
      font-family: 'Oxanium', sans-serif;
      font-style: italic;
      background-image: url('/bgbanner.jpg');
      background-size: cover;
      background-position: center;
      padding: 20px;
      min-height: 300px;
      width: 300px;
    "> -->
  <!-- <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
</t-card>-->
  <t-card style="margin: 15px; font-family: 'Oxanium', sans-serif; font-style: italic;">
    <template #title>
      <h1
        style="font-size: 30px; margin-bottom: -60px; margin-top: -1px; font-weight: 400;font-family: 'Oxanium', sans-serif;">
        Today's Thoughts</h1>
    </template>
    <t-divider style="border-top-width: 2px; margin-top: 10px;" />
    <ul style="font-size: 15px; margin-left: -20px;">
      <li>Communication languages: Hindi, English (learning Spanish)</li>
      <li>Most used languages: Python, TypeScript, C#, Lua</li>
      <li>Interests: Hacking, Vulnerability, AI, Cybersecurity</li>
    </ul>
    <div style="margin-top: 1.5rem; display: flex; align-items: center;">
      <span style="font-size: 1rem; font-weight: 500; font-family: Oxanium;">Social Networks:</span>
      <!-- GitHub -->
      <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-github" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>

      <!-- Instagram -->
      <a href="https://instagram.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-instagram" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>

      <!-- Telegram -->
      <a href="https://t.me/AbhikrX" target="_blank" rel="noopener noreferrer"
        aria-label="Telegram Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-telegram" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>
      <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" rel="noopener noreferrer"
        aria-label="linkedin Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fab fa-linkedin" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>
      <a href="https://x.com/Abhikr_X" target="_blank" rel="noopener noreferrer"
        aria-label="Twitter Profile"
        style="margin-left: 1rem; color: #555; display: flex; align-items: center; text-decoration: none;">
        <i class="fa-brands fa-x-twitter" style="font-size: 1.6rem; cursor: pointer;"></i>
      </a>



    </div>

  </t-card>


</template>

<script setup lang="ts">
import { h } from 'vue';
import { useHead } from '@vueuse/head';
import { StickyItemProps, StickyToolProps } from 'tdesign-vue-next';
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue-next';
import { CardProps } from 'tdesign-vue-next';
import { ThumbUpIcon, ShareIcon } from 'tdesign-icons-vue-next';
const cover: CardProps['cover'] = 'https://tdesign.gtimg.com/site/source/card-demo.png';

// Icon renderers using h()
const renderChatIcon: StickyItemProps['icon'] = () => h(ChatIcon);
const renderAddIcon: StickyItemProps['icon'] = () => h(AddIcon);
const renderQrIcon: StickyItemProps['icon'] = () => h(QrcodeIcon);
import 'tdesign-vue-next/es/style/index.css';



import { LogoGithubFilledIcon, LogoInstagramFilledIcon } from 'tdesign-icons-vue-next';

useHead({
  title: 'About | Abhikr',
});

// Popup content for QR code
const renderPopup: StickyItemProps['popup'] = () =>
  h('img', {
    alt: 'TDesign Logo',
    width: 120,
    height: 120,
    src: 'https://res.cloudinary.com/dgu3gae6k/image/upload/v1750615996/abhikr_ldj2kv.png',
  });

// Sticky tool interaction handlers
const handleClick: StickyToolProps['onClick'] = (context) => {
  console.log('click', context);
};

const handleHover: StickyToolProps['onHover'] = (context) => {
  console.log('hover', context);
};

// Set page title
useHead({
  title: 'Home | Abhikr',
});
</script>

<style scoped>
.profile-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.profile-image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
}

.profile-info {
  flex: 1;
  color: white;
}

.profile-info h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.profile-info p {
  margin: 5px 0;
  font-size: 16px;
}

@media (max-width: 600px) {
  .profile-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-image {
    margin-right: 0;
  }

  .profile-info h2 {
    font-size: 20px;
  }

  .profile-info p {
    font-size: 14px;
  }
}
</style>
