
const restaurants = [
    {
        name: "Texas de Brazil",
        longitude: -98.489125,
        latitude: 29.42663,
        moreInfo: "It is one of the best restaurant"
    },
    {
        name: "Taqueria Datapoint",
        longitude: -98.523195,
        latitude: 29.46101,
        moreInfo: "The best taco place in San Antonio"
    },
    {
        name: "Clementine",
        longitude: -98.52192,
        latitude: 29.53303,
        moreInfo: "Food was delicious!!! They were very thoughtful and helpful"
    }

]

mapboxgl.accessToken = MAPBOX_MAP_API_TOKEN;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
    // style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.489615, 29.426827], // starting position [lng, lat]
    zoom: 10, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

    // map.setZoom(12);
    // map.setCenter([-98.489125, 29.42663]);
    //
    // const favoriteRestaurantMarker = new mapboxgl.Marker()
    //     .setLngLat([-98.489125, 29.42663])
    //     .addTo(map);
    // map.setZoom(14);
    //
    // const favoriteRestaurantPopup = new mapboxgl.Popup()
    // .setHTML('<p class="mt-3" style="width: 200px;">Texas de Brazil</p>');
    // favoriteRestaurantMarker.setPopup(favoriteRestaurantPopup);

restaurants.forEach(restaurant => {
    const marker = new mapboxgl.Marker()
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);
    const popup = new mapboxgl.Popup()
        .setHTML(`<p class="">${restaurant.name}</P>
                  <p>${restaurant.moreInfo}</p>`);
    marker.setPopup(popup);
});






