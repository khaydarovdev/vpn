<template>
	<div id="map" style="height: 500px; width: 100%; margin: auto; border: 1px solid #ddd"></div>
</template>
<script>
import L from 'leaflet';
export default {
	name: 'MapComponent',
	data() {
		return {
			map: null,
			locations: [
				{ coords: [40.7128, -74.006], info: 'New York, USA' },
				{ coords: [48.8566, 2.3522], info: 'Paris, France' },
				{ coords: [-33.8688, 151.2093], info: 'Sydney, Australia' },
			],
		};
	},
	mounted() {
		// Initialize the map
		this.map = L.map('map', {
			center: [20, 0],
			zoom: 2,
			scrollWheelZoom: false, // Disable scroll zoom by default
		});

		// Add a tile layer with a custom style (gray land, white water)
		L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
			attribution: '&copy; <a href="https://www.carto.com/">CARTO</a>',
			subdomains: 'abcd',
			maxZoom: 19,
		}).addTo(this.map);

		// Add markers with popups
		this.locations.forEach((location) => {
			const marker = L.marker(location.coords).addTo(this.map);
			marker.bindPopup(location.info);
		});

		// Enable zoom only when 'Ctrl' key is pressed
		this.map.on('wheel', (event) => {
			if (!event.originalEvent.ctrlKey) {
				event.originalEvent.preventDefault(); // Prevent zoom without 'Ctrl'
			} else {
				this.map.scrollWheelZoom.enable(); // Enable zoom when 'Ctrl' is pressed
				setTimeout(() => this.map.scrollWheelZoom.disable(), 100); // Re-disable zoom after interaction
			}
		});
	},
};
</script>
<style></style>
