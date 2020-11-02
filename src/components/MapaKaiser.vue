<template>
<div id="map">

</div>
<!-- <ion-button v-on:click="mostrarMapa">
  Mostrar Mapa
</ion-button> -->
<!-- {{alerta()}} -->
<!-- <ion-fab vertical="bottom" horizontal="center" slot="fixed">  
    <ion-button v-on:click="mostrarMapa()" vertical="bottom" horizontal="center">
      <ion-icon name="map-outline"></ion-icon>
    </ion-button>
</ion-fab> -->

  
</template>
<script>
// import {IonButton} from "@ionic/vue"
// import L from "leaflet";
import L from "leaflet";
// import {
//   IonIcon,
//   IonButton
// } from "@ionic/vue";
export default {
  name: "MapaKaiser",
  mounted(){
     this.mapas=L.map("map").setView([5.3182464, -73.8197504], 13);
         L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
           maxZoom: 18
         }).addTo(this.mapas);
        
  },
  data() {
    return {
      mapas: null
    }
  },
  methods: {
        
  
  }
};
</script>
}
<style scoped>
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
    #map{
      height: 100%;
    }
</style>