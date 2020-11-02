<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reporte</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reporte</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Reportpage" />
      <div></div>
      <ion-item>
        <ion-label position="floating"
          >¿hubo presencia de muertos o heridos?</ion-label
        >
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">¿tipo de accidente?</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-button>Enviar</ion-button>
      </ion-item>
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
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: "Reporte",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>