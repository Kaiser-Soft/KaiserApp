<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>

        <div>
        </div>

        <div id="mapid"></div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
    <MapaKaiser/>
    
  </ion-page>
</template>


<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import MapaKaiser from "@/components/MapaKaiser.vue";
export default {
  name: "Tab1",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, MapaKaiser },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>