<template>
  <q-page class="q-pa-md">
    <div>

      <div style=" float: right">
        <q-item>
          <q-item-section avatar>
            <q-icon color="yellow" name="las la-trophy"> <span style="color:black; font-size:10pt;">Ranking</span>
            </q-icon>

          </q-item-section>


        </q-item>

      </div>
    </div>

    <div class="q-pa-md">
      <q-linear-progress stripe size="55px" :value="progress1" color="blue" style="border-radius:30px;">
        <div class="absolute-full ">
          <div class="flex flex-cente">

            <q-item>
              <q-item-label style="font-size:18pt">1st</q-item-label>

            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </q-item-section>

              <q-item-section class="q-pr-xl">
                <q-item-label style="font-size:18pt">Ashley</q-item-label>

              </q-item-section>

              <q-item- style="float:right;">
                <q-item-label style="font-size:18pt; float:right;">100 P</q-item-label>

              </q-item->
            </q-item>
          </div>
        </div>
      </q-linear-progress>

      <q-linear-progress stripe size="45px" :value="progress2" color="green" class="q-mt-md"
        style="border-radius:30px; width:91%;">
        <div class="flex flex">

          <q-item>
            <q-item-label style="font-size:18pt">2nd</q-item-label>

          </q-item>

          <q-item>
            <q-item-section avatar class="q-pr-xl">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section class="q-pl-xl">
              <q-item-label style="font-size:18pt">98 P</q-item-label>

            </q-item-section>
          </q-item>
        </div>
      </q-linear-progress>
    </div>





    <div class="q-pa-md" style="max-width: 350px">
      <q-list padding>

        

        <q-item>

          <q-item>
            <q-item-label style="font-size:18pt">3rd</q-item-label>
          </q-item>

          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Fernando</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>

          <q-item>
            <q-item-label style="font-size:18pt">4rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Lino</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>

          <q-item>
            <q-item-label style="font-size:18pt">5rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Luana</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item>
            <q-item-label style="font-size:18pt">6rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Hilton</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item >
          <q-item>
            <q-item-label style="font-size:18pt">7rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Zilda</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item>
            <q-item-label style="font-size:18pt">8rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Airson</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item>
            <q-item-label style="font-size:18pt">9rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Pedro</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item>
            <q-item-label style="font-size:18pt">10rd</q-item-label>
          </q-item>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Hidelgio</q-item-label>
            <!-- <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label> -->
          </q-item-section>

          <q-item-section side top>
            <q-badge label="10k" />
          </q-item-section>
        </q-item>

        <q-separator spaced />


      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref, computed } from 'vue'

// export default {
export default defineComponent({
  name: 'RankingPage',
  setup() {
    const progress1 = ref(1)
    const progress2 = ref(1)

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),

      progress2,
      progressLabel2: computed(() => (progress2.value * 100).toFixed(2) + '%')
    }
  },



})




</script>

<style scoped>
.q-item {
  min-height: 40px;
  padding: 8px 4px;
  color: black;
  transition: color 0.3s, background-color 0.3s;
}
</style>
