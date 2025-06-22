<template>
  <div>
    <!-- Mobile Navbar -->
    <div v-if="isMobile" class="mobile-navbar"
      style="display: flex; align-items: center; justify-content: space-between; padding: 8px 16px; border-bottom: 1px solid #eee;">
      <div style="display: flex; align-items: center;">
        <img src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616296/android-chrome-512x512_hc9657.png" alt="Logo" style="width: 24px; height: 24px; margin-right: 6px;" />
        <div style="display: flex; flex-direction: column;">
          <div style="font-size: 20px; font-weight: 400;">Abhikr | अभिषेक</div>
          <div style="font-size: 11px; color: grey;">Fate is wonderful</div>
        </div>
      </div>

      <t-button variant="text" shape="square" @click="drawerVisible = true">
        <menu-filled-icon />
      </t-button>

      <t-drawer header="Menu" placement="left" v-model:visible="drawerVisible" :footer="false">
        <div
          style="display: flex; flex-direction: column; padding: 1rem; gap: 12px; font-family: 'Oxanium', sans-serif;">
          <t-input v-model="searchQuery" placeholder="Search...">
            <template #suffix>
              <t-icon name="search" style="color: grey; font-size: 16px;" />
            </template>
          </t-input>

          <!-- Mobile Friends Dropdown -->
          <t-popup v-model:visible="showFriendsCardMobile" trigger="click" placement="bottom-left">
            <t-button variant="outline" theme="default" style="width: 100%;">
              <i class="" style="margin-right: 8px;"></i> Friends
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
            <template #content>
              <div class="friends-card-mobile">
                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://cdn.jsdelivr.net/gh/xyamzw/xyamzw/images/blog/avatar.png" alt="Friend 1" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Xyamzw</div>
                      <div class="friend-quote">"Play your own life, interpret your entire being"</div>
                    </div>
                  </div>
                  <a href="https://xyamzw.top" target="_blank" class="friend-link">xyamzw.top</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Friend 2" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Jane Smith</div>
                      <div class="friend-quote">"Dream big."</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Friend 3" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Mike Johnson</div>
                      <div class="friend-quote">"Code never lies"</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Friend 4" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Sarah Williams</div>
                      <div class="friend-quote">"Design with purpose"</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>
              </div>
            </template>
          </t-popup>

          <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
            <t-button variant="outline" theme="default" style="width: 100%;">
              <i class="" style="margin-right: 8px;"></i> Components
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
          </t-dropdown>

          <t-button variant="text" @click="navigateTo('0')">
            <i class="fas fa-home" style="margin-right: 8px;"></i> Home
          </t-button>
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
        <div style="display: flex; flex-direction: column; justify-content: center; padding-left: 6px;">
          <div style="display: flex; align-items: center;">
            <img src="https://res.cloudinary.com/dgu3gae6k/image/upload/v1750616297/favicon-32x32_ninnwa.png" alt="Logo"
              style="width: 24px; height: 24px; margin-right: 6px; margin-left: -25px;" />
            <div style="font-size: 20px; font-weight: 400;">Abhikr | अभिषेक</div>
          </div>
          <div style="font-size: 11px; color: grey; margin-left: 8px;">Fate is wonderful</div>
        </div>
      </template>

      <template #operations>
        <div style="display: flex; gap: 2px; align-items: center; margin-left: 0; padding-right: 0;">
          <t-popup v-model:visible="showFriendsCard" trigger="click" placement="bottom-right">
            <t-button variant="outline" theme="default" style="width: 150px; font-family: 'Oxanium', sans-serif;">
              <i class="" style="margin-right: 18px;"></i>Friends
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
            <template #content>
              <div class="friends-card" style="font-family: 'Oxanium', sans-serif;">
                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://gravatar.com/avatar/139bf9b03b731cfd23a4061a08c5b4d4?s=200&r=g" alt="Friend 1" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Xyamzw</div>
                      <div class="friend-quote">"Play your own life, interpret your entire being"</div>
                    </div>
                  </div>
                  <a href="https://xyamzw.top" target="_blank" class="friend-link">xyamzw.top</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Friend 2" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Jane Smith</div>
                      <div class="friend-quote">"Dream big."</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Friend 3" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Mike Johnson</div>
                      <div class="friend-quote">"Code never lies"</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>

                <div class="friend-cell">
                  <div class="friend-info">
                    <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Friend 4" class="friend-image" />
                    <div class="friend-label-quote">
                      <div class="friend-label">Sarah Williams</div>
                      <div class="friend-quote">"Design with purpose"</div>
                    </div>
                  </div>
                  <a href="https://example.com" target="_blank" class="friend-link">example.com</a>
                </div>
              </div>
            </template>
          </t-popup>

          <t-input v-model="searchQuery" placeholder="Search..."
            style="margin-right: 12px; width: 200px; font-family: 'Oxanium', sans-serif;">
            <template #suffix>
              <t-icon name="search" style="color: grey; font-size: 16px;"></t-icon>
            </template>
          </t-input>
          
          <t-menu-item value="0"><i class="fas fa-home" style="margin-right:5px;"></i>Home</t-menu-item>
            <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
            <t-button variant="outline" theme="default" style="width: 150px; font-family: 'Oxanium', sans-serif;">
              <i class="" style="margin-right: 8px;"></i> Components
              <template #suffix>
                <chevron-down-icon size="16" />
              </template>
            </t-button>
          </t-dropdown>
          <div style="display: flex; gap: 0px; padding: 0px;">
            <t-menu-item value="1" style="padding: 5px;">
              <i class="" style="margin-right: 8px;"></i> About
            </t-menu-item>
            <t-menu-item value="2" style="padding: 5px;">
              <i class="" style="margin-right: 8px;"></i> Projects
            </t-menu-item>
            <t-menu-item value="3" style="padding: 5px;">
              <i class="" style="margin-right: 8px;"></i> Contact
            </t-menu-item>
          </div>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  HeadMenu as THeadMenu,
  MenuItem as TMenuItem,
  Button as TButton,
  Drawer as TDrawer,
  Input as TInput,
  Icon as TIcon,
  Dropdown as TDropdown,
  Popup as TPopup,
} from 'tdesign-vue-next';
import { MenuFilledIcon, ChevronDownIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';

const route = useRoute();
const router = useRouter();

const isMobile = ref(window.innerWidth < 768);
const drawerVisible = ref(false);
const searchQuery = ref('');
const showFriendsCard = ref(false);
const showFriendsCardMobile = ref(false);

const options = [
  { content: 'Button', value: 'btn' },
  { content: 'Card', value: 'card' },
  { content: 'Dialog', value: 'dialog' },
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

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});
</script>

<style scoped>
/* Mobile Friends Card */
.friends-card-mobile {
  width: 90vw;
  max-width: 400px;
  padding: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 60vh;
  overflow-y: auto;
}

/* Desktop Friends Card */
.friends-card {
  width: 900px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* Common Friend Cell Styles */
.friend-cell {
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  background: #fafafa;
  transition: all 0.2s;
}

.friend-cell:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.friend-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.friend-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.friend-label {
  font-weight: 600;
  font-size: 16px;
  color: #333;
}

.friend-quote {
  font-size: 12px;
  color: #666;
  font-style: italic;
  margin-top: 4px;
}

.friend-link {
  font-size: 13px;
  color: #1890ff;
  text-decoration: none;
  margin-top: 8px;
  display: inline-block;
}

.friend-link:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .friends-card-mobile {
    width: 100%;
    max-width: none;
  }
  
  .friend-cell {
    padding: 10px;
  }
  
  .friend-image {
    width: 40px;
    height: 40px;
  }
}
</style>