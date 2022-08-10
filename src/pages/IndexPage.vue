<template>
  <q-page class="q-pa-md">
    <!-- <q-card class="my-card bg-grey-6 q-mt-sm" >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Title
        </div>
      </q-img>
    </q-card> -->

    <q-card-section>
      <div class="text-subtitle2">Bem-vinda Ashley</div>
      <div class="text-h6">Vamos começar o dia</div>
    </q-card-section>


    <div class="q-pa-md" >
      <q-scroll-area style="height: 280px; ">
        <div class="row no-wrap " style="">
          <div v-for="n in 10" :key="n" style="width: 300px; border-radius: 50px;" class="q-pa-sm">
            <q-card class="my-card bg-grey-6 " style="height: 37px; max-width: 300px; border-radius: 20px;">
              <q-img style="height: 260px;" src="public/main-person-image.png">
                <div class="absolute-full text-subtitle2 ">
                  <div style="font-size:40px">Quero progredir</div>
                  <div class="q-pt-md" style="font-size:10pt">Ganhar mais pontos</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>

    <div>
      <div>
        <q-card-section>
          <div class="row">
          <div class="col-9 text-bold" style="font-size:12pt">Jogos Populares</div>
          <div class="text-bold col-3"><a href="#" style="text-decoration:none; color:#13F1A9;">Ver todos</a></div>
          </div>

          
        </q-card-section>
      </div>

      <div>
        <q-btn class="q-ml-md " style="border-radius:13px;" color="grey-9" label="Nivel 1" />
        <q-btn class="q-ml-md" style="border-radius:13px;" color="grey-3" text-color="black" label="Nivel 2" />
        <q-btn class="q-ml-md"  style="border-radius:13px;" color="grey-3" text-color="black" label="Nivel 3" />
      </div>
    </div>

    <div class="q-pa-md" >
      <q-scroll-area style="height: 180px; ">
        <div class="row no-wrap " style="">
          <div v-for="n in 10" :key="n" style="width: 300px; border-radius: 50px;" class="q-pa-sm">
            <q-card class="my-card bg-grey-6 " style="height: 37px; max-width: 300px; border-radius: 20px;">
              <q-img style="height: 160px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdTrm3kjw714dHL_m2n56gWJB3PF4vyVIjOUYdSYlNjkL4HmQYsSazxg5_-YW1tVKSZU&usqp=CAU">
                <div class="absolute-full text-subtitle2 ">
                  <div style="font-size:40px">Matematica</div>
                 
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style scoped>
.q-pa-md {
  padding: 16px 0px;
}

.q-img__container {
  border-radius: 40px;
  font-size: 0;
}
</style>
