<template>
  <t-space>
    <t-sticky-tool type="compact" placement="right-center" :offset="[-80, 100]" style="position: fixed; z-index: 9999;"
      @click="handleClick" @hover="handleHover">
      <!-- <t-sticky-item :icon="renderChatIcon" popup="chat" />
      <t-sticky-item :icon="renderAddIcon" popup="add" /> -->
      <t-sticky-item :icon="renderQrIcon" :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }" />
    </t-sticky-tool>
  </t-space>

  <t-alert theme="warning" message="This site is under development" style="margin: 15px; background-color: #f3e8ff;" />

  <t-card style="margin: 15px; font-family: 'Oxanium', sans-serif; font-style: italic; background-color: #fdfdfd;">
    <template #title>
      <div
        style="background-color: #e6e0f8; padding: 12px 18px;  border-left: 6px solid #8a2be2; margin-bottom: 12px; border-radius: 4px;">
        <h2 class="thoughts-title" style="margin: 0; font-size: 20px;">✨ Daily Spark of Thought</h2>
      </div>
    </template>

    <t-divider style="border-top-width: 2px; margin-top: -15px;" />

    <!-- Highlighted Quote Block -->
    <div
      style="background-color: #f3e8ff; padding: 10px 15px; margin: 15px 0;border-left: 4px solid #a64ac9; border-radius: 4px;">
      <em>“Sometimes a single thought is all it takes to change your day.”</em>
    </div>

    <!-- Thoughtful List -->
    <ul class="info-list" style="list-style-type: none; padding-left: 15px;">
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0;">💬</span>
        “Language shapes the way we think, and determines what we can think about.” – Benjamin Lee Whorf
      </li>
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0;">💻</span>
        “Programming isn't about what you know; it's about what you can figure out.” – Chris Pine
      </li>
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0;">🔒</span>
        “In cybersecurity, the biggest vulnerability is thinking you’re not a target.”
      </li>
    </ul>

    <div class="social-networks">
      <span class="social-label">Social Networks:</span>
      <div class="social-icons">
        <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/0xabhikr" target="_blank" rel="noopener noreferrer"
          aria-label="Instagram Profile">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://t.me/AbhikrX" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile">
          <i class="fab fa-telegram"></i>
        </a>
        <a href="https://www.linkedin.com/in/0xabhikr" target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn Profile">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Abhikr_X" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="mailto:abhikr6714@outlook.com" target="_blank" rel="noopener noreferrer" aria-label="Email Me">
          <i class="fa-solid fa-envelope"></i>
        </a>

      </div>
    </div>
    <t-divider style="border-top-width: 2px; margin-top: 10px;" />

    <h1 style="font-size: 30px; margin-top: 30px; font-weight: 400; font-style: normal;">Posts </h1>
    <t-divider style="border-top-width: 2px; margin-top: 10px;" />

    <h3 class="textcolor"
      style="font-size: 15px; margin-top: 30px; font-weight: 400; font-style: normal; font-family: 'Oxanium', sans-serif; margin-top: -10px; margin-bottom: -25px; ">
      <u>
        PHP SCRIPT TO HANDLE TELEGRAM BOT WEBHOOKS WITH REAL-TIME UPDATES
      </u>
    </h3>
    <div class="social-networks">
      <div class="blog-icon">
        <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i class="fa-solid fa-calendar-days"></i>
        </a>
      </div>
      <span class="blog-label" style="font-style: normal;"> 10 June , 2025 | 10:16 PM </span>

    </div>
    <p style="margin-top: -1px;">Think of a webhook as a way for Telegram to “ping” your server every time something
      happens
      — like when someone sends a message to your bot. Instead of you asking Telegram every few seconds, “Hey, got
      anything
      new?”, Telegram just sends the update to your server automatically.

      It’s fast, efficient, and real-time.

    </p>
    <br>
    <h3 class="textcolor"
      style="font-size: 15px; margin-top: 30px; font-weight: 400; font-style: normal; font-family: 'Oxanium', sans-serif; margin-top: -10px; margin-bottom: -25px; ">
      <u>
        PHP SCRIPT TO HANDLE TELEGRAM BOT WEBHOOKS WITH REAL-TIME UPDATES
      </u>
    </h3>
    <div class="social-networks">
      <div class="blog-icon">
        <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i class="fa-solid fa-calendar-days"></i>
        </a>
      </div>
      <span class="blog-label"  style="font-style: normal;"> 10 June , 2025 | 10:16 PM </span>

    </div>
    <p style="margin-top: -1px;">Think of a webhook as a way for Telegram to “ping” your server every time something
      happens
      — like when someone sends a message to your bot. Instead of you asking Telegram every few seconds, “Hey, got
      anything
      new?”, Telegram just sends the update to your server automatically.

      It’s fast, efficient, and real-time.

    </p>
    <br>
    <h3 class="textcolor"
      style="font-size: 15px; margin-top: 30px; font-weight: 400; font-style: normal; font-family: 'Oxanium', sans-serif; margin-top: -10px; margin-bottom: -25px; ">
      <u>
        PHP SCRIPT TO HANDLE TELEGRAM BOT WEBHOOKS WITH REAL-TIME UPDATES
      </u>
    </h3>
    <div class="social-networks">
      <div class="blog-icon">
        <a href="https://github.com/0xabhikr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i class="fa-solid fa-calendar-days"></i>
        </a>
      </div>
      <span class="blog-label"  style="font-style: normal;"> 10 June , 2025 | 10:16 PM </span>

    </div>
    <p style="margin-top: -1px;">Think of a webhook as a way for Telegram to “ping” your server every time something
      happens
      — like when someone sends a message to your bot. Instead of you asking Telegram every few seconds, “Hey, got
      anything
      new?”, Telegram just sends the update to your server automatically.

      It’s fast, efficient, and real-time.

    </p>

  </t-card>
</template>
<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
import { useHead } from '@vueuse/head';
import { StickyItemProps, StickyToolProps } from 'tdesign-vue-next';
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue-next';
import 'tdesign-vue-next/es/style/index.css';

useHead({
  title: 'Home | Abhikr',
});

// Daily quote state
const dailyQuote = ref<{ text: string; author: string } | null>(null);

// Fetch daily quote from ZenQuotes API
onMounted(async () => {
  try {
    const res = await fetch('https://zenquotes.io/api/today');
    const [obj] = await res.json();
    dailyQuote.value = {
      text: obj.q,
      author: obj.a,
    };
  } catch (e) {
    console.error('Failed to load quote:', e);
  }
});

// Icon renderers
const renderChatIcon: StickyItemProps['icon'] = () => h(ChatIcon);
const renderAddIcon: StickyItemProps['icon'] = () => h(AddIcon);
const renderQrIcon: StickyItemProps['icon'] = () => h(QrcodeIcon);

// Popup for QR code
const renderPopup: StickyItemProps['popup'] = () =>
  h('img', {
    alt: 'QR Code',
    width: 120,
    height: 120,
    src: 'https://res.cloudinary.com/dgu3gae6k/image/upload/v1750615996/abhikr_ldj2kv.png',
  });

// Sticky tool event handlers
const handleClick: StickyToolProps['onClick'] = (context) => {
  console.log('click', context);
};
const handleHover: StickyToolProps['onHover'] = (context) => {
  console.log('hover', context);
};
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
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.social-label {
  font-size: 1rem;
  font-weight: 500;
  font-family: Oxanium;
  white-space: nowrap;
}

.textcolor {
  color: blueviolet;
}

.blog-label {
  font-size: 12px;
  font-weight: 500;
  font-family: Oxanium;
  white-space: nowrap;
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

.blog-icon i {
  color: #555;
  text-decoration: none;
  font-size: small;
}

/* --- Mobile specific overrides --- */
@media (max-width: 768px) {
  .social-networks {
    flex-direction: column;
    /* stack label above icons */
    align-items: flex-start;
    gap: 8px;
  }

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

  .blog-icon i {
    color: #555;
    text-decoration: none;
    font-size: small;
  }
}
</style>
