<template>
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
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Home | Abhikr'
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
