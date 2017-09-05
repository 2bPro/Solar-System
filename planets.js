//Creating prototypes of THREE.Mesh

//This class will be used to crate space background sphere
var loader = new THREE.TextureLoader();
loader.crossOrigin = '';

var SolarSystem = function(radius, segment, image){
	var geometry = new THREE.SphereGeometry(radius, segment, segment)
	var material = new THREE.MeshPhongMaterial({
		map: loader.load(image),
		side: THREE.BackSide,
	})

	THREE.Mesh.call(this, geometry, material);
}

SolarSystem.prototype = Object.create(THREE.Mesh.prototype); 

//This class will be used to create each planet
var Planet = function(radius, segment, image){
	var geometry = new THREE.SphereGeometry(radius, segment, segment)
	var material = new THREE.MeshPhongMaterial({
		map: loader.load(image),
	})

	THREE.Mesh.call(this, geometry, material);
}

Planet.prototype = Object.create(THREE.Mesh.prototype);

//This class will be used to create rings
function Rings(radius, segment	, image) {
	var geometry = new THREE.XRingGeometry(1.2*radius, 2*radius, 2*segment, 5, 0, Math.PI*2)
	var material = new THREE.MeshBasicMaterial({
		map: loader.load(image),
		side: THREE.DoubleSide,
		transparent: true,
		opacity: 0.6,
	})

	THREE.Mesh.call(this, geometry, material);
}

Rings.prototype = Object.create(THREE.Mesh.prototype);