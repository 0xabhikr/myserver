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

  <t-alert theme="warning" message="This site is under development" style="margin: 15px" />

  <t-card style="margin: 15px; font-family: 'Oxanium', sans-serif; font-style: italic;">
    <template #title>
      <h1 class="thoughts-title">Today's Thoughts</h1>
    </template>

    <t-divider style="border-top-width: 2px; margin-top: 10px;" />

    <ul class="info-list">
      <li>Communication languages: Hindi, English (learning Spanish)</li>
      <li>Most used languages: Python, TypeScript, C#, Lua</li>
      <li>Interests: Hacking, Vulnerability, AI, Cybersecurity</li>
    </ul>

    <div class="social-networks">
      <span class="social-label">Social Networks:</span>
      <div class="social-icons">
        <a href="https://github.com/0xabhikr" target="_blank" aria-label="GitHub Profile">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/0xabhikr" target="_blank" aria-label="Instagram Profile">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://t.me/AbhikrX" target="_blank" aria-label="Telegram Profile">
          <i class="fab fa-telegram"></i>
        </a>
        <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" aria-label="LinkedIn Profile">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Abhikr_X" target="_blank" aria-label="Twitter Profile">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  </t-card>
</template>

<script setup lang="ts">
import { h, ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { StickyItemProps, StickyToolProps } from 'tdesign-vue-next';
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue-next';
import 'tdesign-vue-next/es/style/index.css';

useHead({
  title: 'Home | Abhikr',
});

// Sticky Tool icons
const renderChatIcon: StickyItemProps['icon'] = () => h(ChatIcon);
const renderAddIcon: StickyItemProps['icon'] = () => h(AddIcon);
const renderQrIcon: StickyItemProps['icon'] = () => h(QrcodeIcon);

// QR code popup image
const renderPopup: StickyItemProps['popup'] = () =>
  h('img', {
    alt: 'QR Code',
    width: 120,
    height: 120,
    src: 'https://res.cloudinary.com/dgu3gae6k/image/upload/v1750615996/abhikr_ldj2kv.png',
  });

// Sticky tool events
const handleClick: StickyToolProps['onClick'] = (context) => {
  console.log('click', context);
};

const handleHover: StickyToolProps['onHover'] = (context) => {
  console.log('hover', context);
};

// Offset for sticky tool (responsive)
const offset = ref([-80, 100]);
onMounted(() => {
  if (window.innerWidth < 768) {
    offset.value = [-20, 80];
  }
});
</script>

<style scoped>
.thoughts-title {
  font-size: 30px;
  margin-bottom: -60px;
  margin-top: -1px;
  font-weight: 400;
  font-family: 'Oxanium', sans-serif;
}

.info-list {
  font-size: 15px;
  margin-left: -20px;
}

.social-networks {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-label {
  font-size: 1rem;
  font-weight: 500;
  font-family: Oxanium;
}

.social-icons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-icons a {
  color: #555;
  text-decoration: none;
}

.social-icons i {
  font-size: 1.6rem;
  cursor: pointer;
}

/* Responsive styles */
@media (max-width: 768px) {
  .thoughts-title {
    font-size: 22px;
    margin-bottom: -40px;
  }

  .info-list {
    font-size: 14px;
  }

  .social-icons {
    gap: 10px;
  }

  .social-icons i {
    font-size: 1.4rem;
  }
}
</style>
