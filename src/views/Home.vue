<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Kaiser Mapa</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kaiser Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">

      </div>
     
    </ion-content>
    <MapaKaiser/>
  
  
    <!-- <ion-tabs>
    <ion-tab-bar slot="bottom,top" vertical="bottom">
      <ion-tab-button tab="tab1" v-on:click="MapaKaiser.mostrarMapa()">
        <ion-icon name="map"></ion-icon>
        <ion-label>Mapa</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="HomeTow">
        <ion-icon name="apps"></ion-icon>
        <ion-label>Tab Two</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="tab3">
        <ion-icon name="send"></ion-icon>
        <ion-label>Tab Three</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs> -->
</ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
// import L from 'leaflet';
import { defineComponent } from "vue";
import MapaKaiser from "@/components/MapaKaiser.vue";


export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    MapaKaiser
  },
  data(){
    return{

    };
  },
  methods:{

  }
});

</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
