<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div class="bg-blue-100 min-h-screen sm:p-10 p-5 flex flex-col justify-center dark:bg-[#1d2b4d] duration-500 transition-all ease-in-out">
      <button @click="toggleDarkMode" class="anumate-pulse">
        <ModeToggler :class="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
      </button>
      <CardHeader />
      <RouterView />
      <CardFooter />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CardHeader from './components/CardHeader.vue' 
import CardFooter from './components/CardFooter.vue'
import ModeToggler from './components/ModeToggler.vue'

import { ref , onMounted } from 'vue';

const isDarkMode = ref(false);

onMounted(() => {
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-schema: dark)').matches)){
    isDarkMode.value = true;
  }else{
    isDarkMode.value = false;
  }
})

const toggleDarkMode = () => {
  if( isDarkMode.value ){
    localStorage.theme = 'light';
    isDarkMode.value = false;
  }else{
    localStorage.theme = 'dark';
    isDarkMode.value = true;
  }
}
</script>


