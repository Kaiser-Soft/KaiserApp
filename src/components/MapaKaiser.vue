<template>
<div id="mapId">

</div>
<!-- <ion-button v-on:click="mostrarMapa">
  Mostrar Mapa
</ion-button> -->
{{mapa}}
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
  data() {
    return {
      mapa:this.mostrarMapa()
    };
  },
  methods: {
   mostrarMapa(){
        // L.remove();
        // const container = L.DomUtil.get('map'); 
        // if(container != null){ container.leaflet_id = null; }
        // L.DomEvent
        const mapita=L.map("mapId").setView([5.3182464, -73.8197504], 13);
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18
        }).addTo(mapita);
        
      }
      
  },
  computed:{
    
  }
};
</script>
}
<style scoped>
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
    #mapId{
      height: 85%;
    }
</style>