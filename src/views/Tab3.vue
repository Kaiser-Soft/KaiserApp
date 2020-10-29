<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cerrar Sesion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cerrar Sesion</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="LogOutpage" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Cerrar Sesion',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>