<template>
  <q-layout view="lHh Lpr lFf">
    <FooterComponent/>
    <HeaderComponent/>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FooterComponent from 'src/components/base/FooterComponent.vue'
import HeaderComponent from 'src/components/base/HeaderComponent.vue';



export default defineComponent({
    name: "MainLayout",
    setup() {
        return {};
    },
    components: { FooterComponent, HeaderComponent }
})
</script>
