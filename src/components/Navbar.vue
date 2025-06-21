<template>
  <div>
    <div v-if="isMobile" class="mobile-navbar"
      style="display: flex; align-items: center; justify-content: space-between; padding: 8px 16px; border-bottom: 1px solid #eee;">
      <div style="display: flex; align-items: center;">
        <img src="/android-chrome-512x512.png" alt="Logo" style="width: 24px; height: 24px; margin-right: 6px;" />
        <div style="display: flex; flex-direction: column;">
          <div style="font-size: 20px; font-weight: 400; font-style: normal;">Abhikr | अभिषेक</div>
          <div style="font-size: 11px; color: grey; font-style: normal;">Fate is wonderful</div>
        </div>
      </div>

      <t-button variant="text" shape="square" @click="drawerVisible = true">
        <menu-filled-icon />
      </t-button>

      <t-drawer header="Menu" placement="left" v-model:visible="drawerVisible" :footer="false">
        <div style="display: flex; flex-direction: column; padding: 1rem; gap: 8px;">
          <t-input v-model="searchQuery" placeholder="Search..."
            style="margin-bottom: 16px;font-family: 'Oxanium', sans-serif;">
            <template #suffix>
              <t-icon name="search" style="color: grey; font-size: 16px;"></t-icon>
            </template>
          </t-input>
            <t-button variant="outline" theme="default" style="width: 100%; font-family: 'Oxanium', sans-serif;">
              <i class="" style="margin-right: 8px; "></i>Friends
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>

          <t-button variant="text" @click="navigateTo('0')">
            <i class="fas fa-home" style="margin-right: 8px;"></i> Home
          </t-button>
          <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
            <t-button variant="outline" theme="default" style="width: 100%;">
              <i class="" style="margin-right: 8px;"></i> Components
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
          </t-dropdown>

          <t-button variant="text" @click="navigateTo('1')">
            <i class="fas fa-user" style="margin-right: 8px;"></i> About
          </t-button>
          <t-button variant="text" @click="navigateTo('2')">
            <i class="fas fa-project-diagram" style="margin-right: 8px;"></i> Projects
          </t-button>
          <t-button variant="text" @click="navigateTo('3')">
            <i class="fas fa-phone" style="margin-right: 8px;"></i> Contact
          </t-button>
        </div>
      </t-drawer>
    </div>

    <!-- Desktop Navbar -->
    <t-head-menu v-else :value="active" @change="onChange"
      style="font-family: 'Oxanium', sans-serif; font-size: 16px; height: 48px; align-items: center; padding: 0 12px;">

      <template #logo>
        <div
          style="display: flex; flex-direction: column; justify-content: center; padding-left: 6px; padding-right: 0;">
          <div style="display: flex; align-items: center;">
            <img src="/favicon-32x32.png" alt="Logo"
              style="width: 24px; height: 24px; margin-right: 6px; margin-left: -15px;" />
            <div style="font-size: 20px; font-weight: 400;">Abhikr | अभिषेक</div>
          </div>
          <div style="font-size: 11px; color: grey; margin-left: 8px;">Fate is wonderful</div>
        </div>
      </template>

      <template #operations>
        <div style="display: flex; gap: 12px; align-items: center; margin-left: auto; padding-right: 0;">
          <!-- Search box for desktop -->
           <t-space>
            <t-button variant="outline" theme="default" style="width: 150px; font-family: 'Oxanium', sans-serif;">
              <i class="" style="margin-right: 8px; "></i>Friends
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
            </t-space>
          
          <t-input v-model="searchQuery" placeholder="Search..."
            style="margin-right: 12px; width: 200px; font-family: 'Oxanium', sans-serif;">
            <template #suffix>
              <t-icon name="search" style="color: grey; font-size: 16px;"></t-icon>
            </template>
          </t-input>
          

          <t-menu-item value="0" style="font-size: 14px;">
            <i class="fas fa-home" style="margin-right: 8px;"></i> Home
          </t-menu-item>

          <!-- Updated Dropdown after Home -->
          <t-dropdown :options="options" :min-column-width="112" @click="clickHandler"
            style=" font-family: 'Oxanium', sans-serif;">
            <t-space>
            <t-button variant="outline" theme="default" style="width: 150px; font-family: 'Oxanium', sans-serif;">
              <i class="" style="margin-right: 8px; "></i>Components
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
            </t-space>
          </t-dropdown>

          <div style="display: flex; gap: 0px;">
            <t-menu-item value="1" style="font-size: 14px;">
              <i class="fas fa-user" style="margin-right: 8px;"></i> About
            </t-menu-item>
            <t-menu-item value="2" style="font-size: 14px;">
              <i class="fas fa-project-diagram" style="margin-right: 8px;"></i> Projects
            </t-menu-item>
            <t-menu-item value="3" style="font-size: 14px;">
              <i class="fas fa-phone" style="margin-right: 8px;"></i> Contact
            </t-menu-item>
          </div>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, h } from 'vue';  // Added 'h' import for JSX support
import { useRoute, useRouter } from 'vue-router';
import {
  HeadMenu as THeadMenu,
  MenuItem as TMenuItem,
  Button as TButton,
  Drawer as TDrawer,
  Input as TInput,
  Icon as TIcon,
  Dropdown as TDropdown,
  DropdownMenu as TDropdownMenu,
  DropdownItem as TDropdownItem
} from 'tdesign-vue-next';
import { MenuFilledIcon } from 'tdesign-icons-vue-next';
import { ChevronDownIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { DiscountIcon } from 'tdesign-icons-vue-next';

const route = useRoute();
const router = useRouter();

const isMobile = ref(false);
const drawerVisible = ref(false);
const searchQuery = ref("");


const options = [
  {
    content: 'Option 1',
    value: 1,
    prefixIcon: () => h(DiscountIcon),
  },
  {
    content: 'Option 2',
    value: 2,
    prefixIcon: () => h(DiscountIcon),
    children: [
      {
        content: 'Option 1',
        value: 5,
      },
      {
        content: 'Option 2',
        value: 6,
      },
    ],
  },
  {
    content: 'Option 3',
    value: 3,
    divider: true,
  },
  {
    content: 'Option 4',
    value: 4,
  },
];

const clickHandler = (data) => {
  MessagePlugin.success(`Selected: ${data.content}`);
};

const pathToValue = {
  '/': '0',
  '/about': '1',
  '/projects': '2',
  '/contact': '3',
  '/option1': '4',
  '/option2': '5',
  '/option3': '6',
};

const valueToPath = {
  '0': '/',
  '1': '/about',
  '2': '/projects',
  '3': '/contact',
  '4': '/option1',
  '5': '/option2',
  '6': '/option3',
};

const active = ref(pathToValue[route.path] || '0');

const onChange = (value) => {
  const path = valueToPath[value];
  if (path) {
    router.push(path);
  }
};

const navigateTo = (val) => {
  onChange(val);
  drawerVisible.value = false;
};

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style scoped>
@media (min-width: 768px) {
  .mobile-navbar {
    padding: 8px 16px;
  }

  .t-head-menu {
    padding: 0 !important;
  }

  .t-menu-item {
    padding: 0 !important;
  }
}

@media (max-width: 768px) {
  .mobile-navbar {
    padding: 8px 16px;
  }
}

.t-input {
  width: 150px;
}
</style>
