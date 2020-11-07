<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Kaiser</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kaiser</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-card native>
          <ion-card-content>
            <div style="display: flex; justify-content: center;">
                  <ion-avatar>
                      <img src="https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/icon.png" alt="">
                  </ion-avatar>
                </div>
            <ion-title>Kaiser</ion-title>
            <ion-label>Hola es bueno verte de nuevo</ion-label>
             <ion-item>
                    
            </ion-item>
            <ion-button>
              <router-link
                to="/tabs/tab1"
                style="text-decoration: none; color: white"
              >
                ¡VAMOS!
              </router-link>
            </ion-button>
            <ion-button @click.prevent="logout">Cerrar Sesión</ion-button>
          </ion-card-content>
        </ion-card>
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
} from "@ionic/vue";
// import L from 'leaflet';
import { defineComponent } from "vue";
import firebase from 'firebase';

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {};
  },
  methods: {
     logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name: 'Login'})
      })
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
</style>
