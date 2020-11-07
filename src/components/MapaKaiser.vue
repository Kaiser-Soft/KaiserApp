<template>
  <div id="map"></div>
  <!-- <ion-button v-on:click="mostrarMapa">
  Mostrar Mapa
</ion-button> -->
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
import firebase from "firebase";
import "@/dbFirebase/init";
// import {
//   IonIcon,
//   IonButton
// } from "@ionic/vue";
export default {
  name: "MapaKaiser",
  mounted() {
    const customIcon = new L.icon({
      iconUrl: "https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/images/iconpunto.png",
      iconSize: [38, 50],
      iconAnchor: [22, 45],
    });
    const mapa = L.map("map").setView([5.3182464, -73.8197504], 15);
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(mapa);
    // this.colocar()
    const db = firebase.firestore();
    db.collection("ubicación")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          const datos = doc.data();
          // latitud.push(datos.lati)
          // longitud.push(datos.longi)
           L.marker([datos.lati, datos.longi], { icon: customIcon }).addTo(mapa).bindPopup("<center><img src='https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/icon.png' width='30px' height='30px'></center>"+"<br>"+"<b>Tipo de accidente: </b>"+datos.coment2+"<br>"+"<b>Presencia de muertos o heridos: </b>"+datos.coment1).openPopup();
          // console.log(doc.id, " => ", datos.coment2);
        });
      });
    // for (let i = 0; i < 2; i++) {
    //   console.log(latitud[i]+","+ longitud[i])

    // }
  },
  data() {
    return {
      mapas: null,
      ubi: undefined,
    };
  },
  methods: {
    // colocar(){
    //      const db= firebase.firestore();
    //      const latitud= new Array(0);
    //      const longitud= new Array(0);
    //      db.collection("ubicación").get().then(function(querySnapshot) {
    //         querySnapshot.forEach(function(doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             const datos=doc.data();
    //             latitud.push(datos.lati)
    //             longitud.push(datos.longi)
    //             console.log(doc.id, " => ", datos.coment2);
    //         });
    //     });
    //     for (let i = 0; i < 2; i++) {
    //       console.log(latitud[i]+","+ longitud[i])
    //       L.marker([latitud[i], longitud[i]]).addTo(this.mapa)
    //     }
    //     // const database = firebase.firestore();
    //     // database.doc('ubicación/prueba2').onSnapshot(function(result) {
    //     //   const data = result.data();
    //     //   console.log(data.lati);
    //     // })
    // }
  },
};
</script>
}
<style scoped>
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
#map {
  height: 90%;
  z-index: 1;
}
</style>