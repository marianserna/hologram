class Scene {
  constructor() {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);

    this.init();
    this.addLights();
    this.addFox();
    this.addPeppersGhost();
    this.loop();

    window.addEventListener('resize', () => this.handleResize());
  }

  width() {
    return window.innerWidth;
  }

  height() {
    return window.innerHeight;
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this.width() / this.height(), 1, 100000);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio = window.devicePixelRatio;
    this.renderer.setSize(this.width(), this.height());

    this.container.appendChild(this.renderer.domElement);
  }

  addLights() {
    const light = new THREE.AmbientLight(0xB2EBF2, 0.7);
    this.scene.add(light);
  }

  addPeppersGhost() {
    this.effect = new THREE.PeppersGhostEffect( this.renderer );
		this.effect.setSize(this.width(), this.height());
		this.effect.cameraDistance = 50;
  }

  addFox() {
    this.fox = new Fox();
    this.scene.add(this.fox.group);
  }

  handleResize() {
    this.renderer.setSize(this.width(), this.height());
    this.camera.aspect = this.width() / this.height();
    this.camera.updateProjectionMatrix();
  }

  loop() {
    this.render();
    requestAnimationFrame(() => {
      this.loop();
    });
  }

  render() {
    this.camera.lookAt(this.scene.position);
    this.effect.render(this.scene, this.camera);
  }
}
