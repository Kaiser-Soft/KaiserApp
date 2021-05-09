<template>
  <!-- <link
    href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
    rel="stylesheet"
  /> -->
  <IonPage>
    <div class="marker"></div>

    <div id="map"></div>
  </IonPage>
</template>
<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { IonPage } from "@ionic/vue";

export default {
  components: { IonPage },
  name: "MapaMapBox",
  data() {
    return {
      map: null,
      pitch: 0,
      latitud: 0,
      longit: 0
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibGVvcmFtaTk5IiwiYSI6ImNrbmZhenZxYzAwaWMycHM5NDJhY2pxdXcifQ.rbyAEFrWLN6qWRTrSusZLg";
    const mapa = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-73.8143217, 5.3086209], // starting position [lng, lat]
      //center: [this.longit, this.latitud],
      zoom: 13, // starting zoom
    });
    const popup = new mapboxgl.Popup({ offset: 25 }).setText("Prueba");
    popup.on("close", function () {
      mapa.flyTo({
        pitch: 0,
        bearing: 0,
        zoom: 13,
      });
    });
    popup.on("open", function () {
      mapa.flyTo({
        pitch: 60,
        bearing: -60,
        zoom: 16,
        center: [-73.8135058, 5.3162895]
      });
    });
    const el = document.createElement("div");
    el.className = "marker";
    const marker = new mapboxgl.Marker(el);

    marker.setPopup(popup);
    marker.setLngLat([-73.8135058, 5.3162895]);
    marker.addTo(mapa);
    //mapa.addControl(new mapboxgl.NavigationControl());

    // mapa.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken
    // }));
    //Controles de mapa tanto rastreo de ubicación como de zoom y fullscreen
    mapa.addControl(new mapboxgl.NavigationControl());
    mapa.addControl(new mapboxgl.FullscreenControl());
    const geolocate = new mapboxgl.GeolocateControl({
      fitBoundsOptions: {
        zoom: 13,
        pitch: 10,
        // bearing: 120
      },
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    mapa.addControl(geolocate);
    mapa.on("load", function () {
      geolocate.trigger();
    });
  },
  // methods: {
  //   ubicacion(){
  //          if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         this.latitud = position.coords.latitude;
  //         this.longit = position.coords.longitude;
  //         // this.latitud=latitud;
  //         // alert(`${latitud} + ${longit}`)
  //       });
  //     } else {
  //       console.log("no funciona el servicio de ubicación");
  //     }
  //   } 
  // },  
};
</script>
<style lang="css">
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 10%;
  bottom: 0;
  width: 100%;
}
.marker {
  background-image: url("https://raw.githubusercontent.com/https-github-com-Kbra/Kaiser/master/images/iconpunto.png");
  background-size: cover;
  width: 40px;
  height: 50px;
  /* border-radius: 50%; */
  cursor: pointer;
}
</style>
