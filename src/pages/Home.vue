<template>
  <t-space>
    <t-sticky-tool
      type="compact"
      placement="right-center"
      :offset="[-80, 100]"
      style="position: fixed; z-index: 9999;"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item :icon="renderChatIcon" popup="chat" />
      <t-sticky-item :icon="renderAddIcon" popup="add" />
      <t-sticky-item
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      />
    </t-sticky-tool>
  </t-space>

  <t-alert
    theme="warning"
    message="This site is under development"
    style="margin: 15px;"
  />

  <t-card
    style="
      margin: 15px;
      font-family: 'Oxanium', sans-serif;
      font-style: italic;
      background-image: url('/bgbanner.jpg');
      background-size: cover;
      background-position: center;
      padding: 20px;
      min-height: 300px;
    "
  >
    <t-space direction="vertical" size="large">
      <div class="profile-container">
        <img
          src="/logo.jpg"
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
  <!-- <t-card style="
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

// Popup content for QR code
const renderPopup: StickyItemProps['popup'] = () =>
  h('img', {
    alt: 'TDesign Logo',
    width: 120,
    height: 120,
    src: 'https://tdesign.gtimg.com/site/site.jpg',
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
