class Fox {
  constructor() {
    this.group = new THREE.Group();
    // this.group.scale.set(2, 2, 2);
    this.addHead();
    this.addBody();
    this.addNose();
    this.addRightEar();
    this.addLeftEar();
    this.addRightEye();
    this.addLeftEye();
    this.addRightFoot();
    this.addLeftFoot();
    this.addTail();
  }

  addHead() {
    let material, triangle;

    // middle
    material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7 } );
    triangle = this.createTriangle(15, 8, 5, material);
    triangle.rotation.z += (Math.PI / 16) * 8;
    this.group.add(triangle);

    // left
    material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, transparent: true, opacity: 0.7 } );
    triangle = this.createTriangle(15, 8, 5, material);
    triangle.rotation.z += (Math.PI / 16) * 5;
    this.group.add(triangle);

    // right
    material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 20, transparent: true, opacity: 0.7 } );
    triangle = this.createTriangle(15, 8, 5, material);
    triangle.rotation.z += (Math.PI / 16) * 11;
    this.group.add(triangle);
  }

  addBody() {
    let material, triangle;

    material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, shininess: 20, transparent: true, opacity: 0.7} );
    triangle = this.createTriangle(22, 20, 3, material);
    triangle.rotation.z -= (Math.PI / 16) * 8;
    triangle.position.y += 8;
    this.group.add(triangle);
  }

  addNose() {
    let material, triangle;

    material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, shininess: 20} );
    triangle = this.createTriangle(1.5, 3.5, 1, material);
    triangle.rotation.z += (Math.PI / 16) * 8;
    triangle.position.z += 5;
    this.group.add(triangle);
  }

  addRightEar() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 15.5;
    destination.position.y += -3;
    anchor.add(destination);

    let material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7 } );
    let triangle = this.createTriangle(2, 5, 2, material);
    triangle.rotation.z += (Math.PI / 16) * 3.5;
    destination.add(triangle);

    anchor.rotation.z += (Math.PI / 16) * 5;

    this.group.add(anchor);
  }

  addLeftEar() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 15.5;
    destination.position.y += 3;
    anchor.add(destination);

    let material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7 } );
    let triangle = this.createTriangle(2, 5, 2, material);
    triangle.rotation.z -= (Math.PI / 16) * 3.5;
    destination.add(triangle);

    anchor.rotation.z += (Math.PI / 16) * 11;

    this.group.add(anchor);
  }

  addRightEye() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 9;
    destination.position.z += 6;
    anchor.add(destination);

    const geometry = new THREE.SphereBufferGeometry( 1, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0x262626} );
    const sphere = new THREE.Mesh( geometry, material );

    destination.add(sphere);
    anchor.rotation.z += (Math.PI / 16) * 5;
    this.group.add(anchor);
  }

  addLeftEye() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 9;
    destination.position.z += 6;
    anchor.add(destination);

    const geometry = new THREE.SphereBufferGeometry( 1, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0x262626} );
    const sphere = new THREE.Mesh( geometry, material );

    destination.add(sphere);
    anchor.rotation.z += (Math.PI / 16) * 11;
    this.group.add(anchor);
  }

  addRightFoot() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 12;
    destination.position.y += -3;
    anchor.add(destination);

    let material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7 } );
    let triangle = this.createTriangle(2, 5, 4, material);
    destination.add(triangle);

    anchor.rotation.z -= (Math.PI / 16) * 8;

    this.group.add(anchor);
  }

  addLeftFoot() {
    let anchor = new THREE.Object3D();
    let destination = new THREE.Object3D();
    destination.position.x += 12;
    destination.position.y += 2;
    anchor.add(destination);

    let material = new THREE.MeshPhongMaterial( { color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7 } );
    let triangle = this.createTriangle(2, 5, 4, material);
    destination.add(triangle);

    anchor.rotation.z -= (Math.PI / 16) * 8;

    this.group.add(anchor);
  }

  addTail() {
    let geometry = new THREE.ConeGeometry( 2, 20, 32 );
    let material = new THREE.MeshBasicMaterial( {color: 0xFF5A09, specular: 0x00ffff, shininess: 20, transparent: true, opacity: 0.7} );
    let cone = new THREE.Mesh( geometry, material );
    cone.position.y -= 7;
    cone.position.x -= 10;
    cone.position.z += 2;
    cone.rotation.z -= (Math.PI / 16) * 12;
    this.group.add(cone);
  }

  createTriangle(width, height, depth, material) {
    const geometry = new PrismGeometry([
      new THREE.Vector2(-0, 0),
      new THREE.Vector2(width, height / 2),
      new THREE.Vector2(width, -height / 2)], depth);

      return new THREE.Mesh(geometry, material);
  }

  setYaw(yaw) {
    this.group.rotation.y = yaw;
  }
}
