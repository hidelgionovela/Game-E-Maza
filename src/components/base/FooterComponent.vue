<template>
  <q-footer elevated class="bg-transparent">
        <div class="q-pa-sm" >
        <q-tabs
        style="border-radius : 25px"
        v-model="tab"
        indicator-color="transparent"
        active-color="primary"
        class="bg-white text-grey shadow-2"
      >
        <q-tab name="mails" icon="mail" />
        <q-tab name="alarms1" icon="alarm" />
        <q-tab name="alarms2" icon="alarm" />
        <q-tab name="alarms3" icon="alarm" />
        <q-tab name="movies" icon="movie" />
      </q-tabs>
      </div>
      </q-footer>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
   name: 'FooterComponent',
   
    setup() {
        const tab = ref('mail')
        return{
                tab
        }
    }
    
})
</script>

<style scoped>

</style>