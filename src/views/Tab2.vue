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
        <form action="" @submit.prevent="enviarDato">
           <ion-item>
              <ion-label position="floating">Nombre Reporte</ion-label>
              <ion-input v-model="nombreReporte"></ion-input>
            </ion-item>
              <ion-item>
              <ion-label position="floating"
                >¿Hubo presencia de muertos o heridos?</ion-label
              >
              <ion-input v-model="pregunta1"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">¿Tipo de accidente?</ion-label>
              <ion-input v-model="pregunta2"></ion-input>
            </ion-item>
            <ion-item>
              <ion-button type="sumbit">Enviar</ion-button>
              <ion-button @click="miUbicacion()"> mi ubicación </ion-button>
            </ion-item>
        </form>
        <!-- <p>{{mensaje}}</p> -->
        <div id="container" style="text-align:center;">
          <p>{{mensaje}}</p>
          <h1>Tu ubicación</h1>
          <p>Latitud={{ latitud }} Longitud={{ longit }}</p>
        </div>
      <!-- <p>chale={{nambre}}</p> -->
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
  IonInput
} from "@ionic/vue";
import { defineComponent } from "vue";
import firebase from "firebase";
import '@/dbFirebase/init';
// import geolocation from '@ionic-native/geolocation'
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: "Tab2",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },
  data() {
    return {
      latitud: NaN,
      longit: NaN,
      nombreReporte:'',
      pregunta1:'',
      pregunta2:'',
      mensaje:''
    };
  },
  methods: {
    miUbicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitud = position.coords.latitude;
          this.longit = position.coords.longitude;
          // this.latitud=latitud;
          // alert(`${latitud} + ${longit}`)
        });
      } else {
        console.log("no funciona el servicio de ubicación");
      }
    },
    enviarDato(){
        this.mensaje=''
        const db= firebase.firestore();
        db.collection("ubicación").doc(this.nombreReporte).set({
            coment1: this.pregunta1,
            coment2: this.pregunta2, 
            lati: this.latitud,
            longi: this.longit
        })
        .then(() => {

            this.mensaje='Registro enviado con exito'
            this.$router.push({name: 'tab1'})
            // console.log("Document successfully written!");

        })
        .catch((error)=> {
          this.mensaje='Error al enviar registro'
            console.error("Error writing document: ", error);
        });
    }
  }
});
</script>