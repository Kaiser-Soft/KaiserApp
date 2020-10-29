<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>

        <div><client-only>
        <l-map ref="mapita"></l-map>
        </client-only></div>

        <div id="mapid"></div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
              
      
      <ExploreContainer name="Mappage" />
      
      
    </ion-content>
  </ion-page>
  
</template>


<script lang="ts">



import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';


import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



export default  {
  name: 'Mapa',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
     },
  data(){
    return{

    };
  },

  methods: {
          mostrarMapa(){
      const mapita = L.map('mapid').setView([51.505, -0.09], 13);
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(mapita);
    }
  }
}

</script>

<style scoped>
    #mapid{
        height:100%;
    }
</style>