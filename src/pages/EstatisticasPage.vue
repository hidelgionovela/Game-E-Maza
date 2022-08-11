<template>
  <q-page class="q-pa-md">

    <!-- <div style="background-color: #09f5e12d;"> -->
    <div>
      <!-- <q-card class="my-card" flat bordered> -->
      <q-item>
        <q-item-section>
          <q-item-label class="text-bold">Ashley</q-item-label>
          <q-item-label caption>
            Ashley842749
          </q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-avatar size="75px">
            <img src="/Alysha .jpg">
          </q-avatar>
        </q-item-section>
      </q-item>


      <q-card-actions class="q-pb-xl">
        <q-avatar size="30px">
          <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg">
        </q-avatar>
        <div flat class="q-pa-md">
          <span color="grey"> Por aqui desde Novembro de 2021</span>
        </div>
      </q-card-actions>
    </div>

    <section>
      <div></div>
      <div style="color:white">complete o seu perfil com alguns passos rapidos, essa pagina vai ficar a sua cara</div>
    </section>


    <div>
      <h6>Estatisticas</h6>
    </div>

    <!-- <div class="row">
  <div class="col-5" style="background-color:blue; margin-right:8px;">
    <p>5 <br>Dia da ofensiva</p>
   
  </div>
 
  <div class="col-5" style="background-color:blue;"> hidelgo</div>
  <br><br>
  <div class="col-5" style="background-color:blue;"> hidelgo</div>
  <div class="col-5" style="background-color:blue;"> hidelgo</div>
  
</div> -->
    <div style="margin-bottom:40px; padding-bottom:30px;">
      <div>
        <a class="button" href="(LINK)"
          style="float: left;  width:49%; height:50px; vertical-align: middle; background:rgb(196, 196, 196); color:white;border-radius:16px; font-size: 15px; text-decoration:none; padding:2px 2px 2px 17px;"><span
            style="color:black;">5</span> <br><span style="color:darkgrey;">Dia da ofensiva</span></a>
      </div>
      <div>
        <a class="button" href="(LINK)"
          style="float: right;  width:49%; height:50px; vertical-align: middle; background:rgb(196, 196, 196); color:white;border-radius:16px; font-size: 15px; text-decoration:none; padding:2px 2px 2px 17px;"><span
            style="color:black;">100</span> <br> <span style="color:darkgrey;">Total XP</span></a>
      </div>
    </div>

    <div style="margin-bottom:40px; padding-bottom:30px;">
      <div>
        <a class="button" href="(LINK)"
          style="float: right;  width:49%; height:50px; vertical-align: middle; background:rgb(196, 196, 196); color:white;border-radius:16px; font-size: 15px; text-decoration:none; padding:2px 2px 2px 17px;"><span
            style="color:black;">0</span> <br> <span style="color:darkgrey;">Podios</span></a>
      </div>
      <div>
        <a class="button" href="(LINK)"
          style="float: left;  width:49%; height:50px; vertical-align: middle; background:rgb(196, 196, 196); color:white;border-radius:16px; font-size: 15px; text-decoration:none; padding:2px 2px 2px 17px;"><span
            style="color:black;">76</span> <br> <span style="color:darkgrey;">Total de moedas</span></a>
      </div>
    </div>

    <div style="margin-bottom:40px; padding-bottom:30px;">
      <q-btn color="grey-5" class=""
        style="height:49px; width:80%; padding-left:10%; margin-left:10%; color:blue; border-radius:16px; font-size: 15px;">
        Convidar Amigos e familia <q-badge color="red" floating></q-badge>
      </q-btn>
    </div>



    <br><br>






  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EstatisticasPage'
})
</script>

<style scoped>
section div:first-child {
  background-color: rgb(10, 118, 241);
  width: 170px;
  height: 170px;
  position: relative;
  float: left;
  border-radius: 19pt;
  text-align: center;
}

section div:last-child {
  background-color: rgb(10, 118, 241);
  width: 170px;
  height: 170px;
  position: relative;
  top: 10px;
  margin-left: 120px;
  border-radius: 19pt;
  box-shadow: #000 0px 0px 0px 0.1px;
  box-shadow: rgb(196, 196, 196);

}
</style>
