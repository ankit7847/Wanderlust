
    mapboxgl.accessToken = mapToken;
      const map = new mapboxgl.Map({
          container: 'map', // container ID
          center: [85.6666,22.0650], // starting position [lng, lat]. Note that lat must be set between -90 and 90
          zoom: 9 // starting zoom
      });