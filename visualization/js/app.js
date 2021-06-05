class App {
  constructor(canvas, model, animations) {
    this.scene = App.createScene().add(model).add(App.createAmbientLight()).add(App.createDirectionalLight());
    this.camera = App.createCamera();
    this.renderer = App.createRenderer(canvas);
    this.mixer = new AnimationMixer(model, animations);
    this.update();
  }

  static createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x336495);
    return scene;
  }

  static createAmbientLight() {
    return new THREE.AmbientLight(0xffffff, 1);
  }

  static createDirectionalLight() {
    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 400, 350);
    return light;
  }

  static createCamera() {
    let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = -3;
    camera.position.z = 10;
    return camera;
  }

  static createRenderer(canvas) {
    let renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.0;
    return renderer;
  }

  update() {
    this.resize();
    this.mixer.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => {
      this.update();
    });
  }

  resize() {
    let canvasSize = this.renderer.getSize(new THREE.Vector2());
    let windowSize = new THREE.Vector2(window.innerWidth, window.innerHeight);
    if (!canvasSize.equals(windowSize)) {
      this.renderer.setSize(windowSize.x, windowSize.y, false);
      this.camera.aspect = windowSize.x / windowSize.y;
      this.camera.updateProjectionMatrix();
    }
  }
}

class AnimationMixer {
  constructor(model, animations) {
    this.clock = new THREE.Clock();
    this.mixer = new THREE.AnimationMixer(model);
    this.animations = animations;
  }

  play(clip) {
    let animation = this.animations.find((a) => a.name === clip);
    if (animation) {
      this.mixer.stopAllAction();
      this.mixer.clipAction(animation).play();
      this.clip = clip;
    }
  }

  update() {
    let delta = this.clock.getDelta();
    this.mixer.update(delta);
  }
}

let loader = new THREE.GLTFLoader();
loader.load(
  'https://pcdeng.github.io/visualization/models/multi.glb',
  function (gltf) {
    let model = gltf.scene;
    model.scale.set(10, 10, 10);
    model.position.y = -6;

    let canvas = document.getElementById('appCanvas');
    let app = new App(canvas, model, gltf.animations);
    app.mixer.play('CatWalk');

    const clips = ['CatWalk', 'Samba', 'Belly'];
    const prevBtn = document.querySelector('.prev');
    prevBtn.addEventListener('click', () => {
      play('prev');
    });

    const nextBtn = document.querySelector('.next');
    nextBtn.addEventListener('click', () => {
      play('next');
    });

    function play(direction) {
      let clip = app.mixer.clip;
      if (direction === 'next') {
        clip = getClip((clipIndex, len) => {
          return (clipIndex = (clipIndex + 1) % len);
        });
      } else if (direction === 'prev') {
        clip = getClip((index, len) => {
          index = (index - 1) % len;
          if (index < 0) {
            index = len - 1;
          }
          return index;
        });
      }
      app.mixer.play(clip);
    }

    function getClip(fn) {
      let clipIndex = clips.indexOf(app.mixer.clip);
      clipIndex = fn(clipIndex, clips.length);
      return clips[clipIndex];
    }
  },
  undefined,
  (err) => {
    console.error(err);
  },
);
