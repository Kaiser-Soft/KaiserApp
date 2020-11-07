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
        <ion-button @click.prevent="logout">
          Cerrar Sesión
        </ion-button>      
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
  IonButton
} from "@ionic/vue";

import { defineComponent } from "vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: "Cerrar Sesion",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  data(){
    return{
      user: null,
      enlace: ''
    }
  },
  methods:{
    // ,
    // created(){
    //   firebase.auth().onAuthStateChanged(user=>{
    //     if (user) {
    //       this.user= user;
    //     }else{
    //       this.user = null
    //     }
    //   })
    // }
  }
});
</script>