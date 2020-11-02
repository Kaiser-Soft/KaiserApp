<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>

        <div>
          <client-only>
            <l-map ref="mapita"></l-map>
          </client-only>
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
export default {
  name: "Mapa",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>