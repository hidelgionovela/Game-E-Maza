<template>

  <q-page class="q-pa-md">
    <div>
      <div style="float:left;">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Ashley</q-item-section>
        </q-item>
      </div>

      <div style=" float: right; padding-top:20px;">
        <q-item-section class="q-pr-md">240 Pontos</q-item-section>
      </div>
    </div>
    <br>


    <div class="q-pa-xl">
      <q-scroll-area style="height: 180px; ">
        <div class="row no-wrap " style="">
          <div v-for="n in 10" :key="n" style="width: 190px; border-radius: 50px;" class="q-pa-sm">
            <q-card class="my-card bg-grey " style="height: 37px; max-width: 300px; border-radius: 20px;">
              <q-img style="height: 160px;"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdTrm3kjw714dHL_m2n56gWJB3PF4vyVIjOUYdSYlNjkL4HmQYsSazxg5_-YW1tVKSZU&usqp=CAU">
                <div class="absolute-full text-subtitle2 ">
                  <div style="font-size:16px"></div>

                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>



    <div class="q-pa-md q-gutter-md" style="background-color:#E0E6F3; border-radius: 55px 35px 40px 60px">
      <q-list class="" style="max-width: 350px">
        <q-item-label header>Historico</q-item-label>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- <q-separator inset="item" /> -->


        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>


        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">10 Pontos</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Nov 17</span>
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label lines="1">10,00 MZN</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">Samantha33145</span>
            </q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PontosPage'
})
</script>

<style scoped>
.q-pa-xl {
  padding: 48px 0px;
}

.q-pa-md {
  padding: 16px 1px;
}
</style>
