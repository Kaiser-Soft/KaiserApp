<template>
  <ion-page>
    <ion-header :translucent="false">
      <ion-toolbar>
        <ion-title>Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="false">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kaiser Mapa</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <form action="" @click.prevent="login">

          <ion-card native>
              <ion-card-content>
                <div style="display: flex; justify-content: center;">
                  <ion-avatar>
                      <img src="https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/icon.png" alt="">
                  </ion-avatar>
                </div>
              <ion-title>Iniciar Sesión</ion-title>
              <ion-label>Hola es bueno verte de nuevo</ion-label>
                <ion-item>
                    <ion-label position="floating">E-Mail<ion-text color="danger">*</ion-text></ion-label>
                    <ion-input required formControlName="email" type="text" v-model="email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Contraseña<ion-text color="danger">*</ion-text></ion-label>
                    <ion-input required formControlName="email" type="password" v-model="password"></ion-input>
                </ion-item>
                <ion-button type="sumbit">
                      Iniciar
                </ion-button>
              </ion-card-content>
                    <router-link to="Registro">
                <ion-button>
                        Registro
                </ion-button>
                    </router-link>
              <div>{{error}}</div>
          </ion-card>
        </form>
      </div>
      
    </ion-content>
    
</ion-page>

</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonCard,
  IonButton,
  IonCardContent,
  IonText,
  IonItem
} from "@ionic/vue";
// import L from 'leaflet';
import { defineComponent } from "vue";
import firebase from "firebase";
import '@/dbFirebase/init';

export default defineComponent({
  name: "login",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonCard,
    IonButton,
    IonCardContent,
    IonText,
    IonItem
  },
  data(){
    return{
      email:'',
      password:'',
      error:''

    };
  },
  methods:{
    login(){
          this.error=''
          if (this.email && this.password) {
              firebase.auth().signInWithEmailAndPassword(this.email, this.password)
              .then(user=>{
                  this.$router.push({name: 'Home'})
                  user
              }).catch(err=>{
                  this.error= err.message
              })
          } else {
              this.error="falta algun campo"
          }
      }
  
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
#imagen{
  align-content: center;
  position: absolute;
}
</style>
