var THREEx = THREEx || {}

/**
 * build a classic 3 points lighting
 * @return {THREE.Object3D} container for the 3 lights
 */
THREEx.ThreePointsLighting	= function(){
	var container	= new THREE.Object3D()

	var object3d	= new THREE.AmbientLight(0x101010)
	object3d.name	= 'Ambient light'
	container.add(object3d)

	var object3d	= new THREE.DirectionalLight('white', 0.225)
	object3d.position.set(2.6,1,3)
	object3d.name	= 'Back light'
	container.add(object3d)

	var object3d	= new THREE.DirectionalLight('white', 0.375)
	object3d.position.set(-2, -1, 0)
	object3d.name 	= 'Key light'
	container.add(object3d)

	var object3d	= new THREE.DirectionalLight('white', 0.75)
	object3d.position.set(3, 3, 2)
	object3d.name	= 'Fill light'
	container.add(object3d)
	
	return container
}

/**
 * build a sunset lighting
 * @return {THREE.Object3D} container for the 3 lights
 */
THREEx.SunSetLighting	= function(){
	var object3d	= new THREE.Object3D()
	var light	= new THREE.AmbientLight( 0x080808 )
	object3d.add( light )
	var light	= new THREE.DirectionalLight( 'midnightblue', 1 )
	light.position.set(5,1,0)
	object3d.add( light )
	var light	= new THREE.DirectionalLight( 'darkred', 1.5 )
	object3d.add( light )
	return object3d
}