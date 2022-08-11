<template>
        <q-header class="bg-white text-primary">
                <q-toolbar>
                        <q-btn flat round icon="menu" class="" />

                        <q-toolbar-title>
                                <div class=" text-center">
                                        <div class="text-dark text-bold" style="font-size: 12px; margin-top: 5px;">
                                                Caloiro</div>
                                        <div>
                                                <q-linear-progress rounded size="13px" :value="progress" color="primary"
                                                        class="q-mt-xs" />
                                        </div>
                                        <div style="font-size: 12px">300 pts <span class="text-grey-9 text-bold"> / 1000
                                                        pts</span> </div>
                                </div>
                        </q-toolbar-title>

                        <q-btn round dense>
                                <q-avatar>
                                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                                </q-avatar>
                        </q-btn>
                </q-toolbar>
        </q-header>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
        name: 'HeaderComponent',

        setup() {
                const progress = ref(0.4)
                return {
                        progress
                }
        }

})


</script>

<style scoped>
</style>