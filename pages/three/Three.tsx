import styles from "../../styles/Three.module.scss";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Color, Vector3 } from "three";

export default function Three() {
  // reference for the canvas element
  const canvas = useRef<HTMLCanvasElement>(null);
  const reset = useRef<HTMLButtonElement>(null);
  
  const [showdev, setDev] = useState(true)
  
  const degree = (deg: number) : number => {
    return (Math.PI / 180) * deg;
  } 

  // all the threejs code goes here
  useEffect(() => {
    const loader = new GLTFLoader();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current! });

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // initialisation
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sizes.width, sizes.height);
    let camx = 0
    let camy = 30
    let camz = 30
    camera.position.set(camx, camy, camz)
    camera.rotation.x = degree(-55)
    renderer.render(scene, camera);
    
    // responsiveness
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // main code
    
    scene.background = new Color(0xfce0d6);

    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6346 });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);

    const floorGeometry = new THREE.PlaneGeometry(200, 200)
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = degree(-90)
    
    const playerGeometry = new THREE.BoxGeometry(7, 5, 10)
    const player = new THREE.Mesh(playerGeometry, torusMaterial)
    player.position.y = 2.5
    

    scene.add(floor, player);

    // light
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(-5, 5, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    // helpers

    
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    const axis = new THREE.AxesHelper(50)

    // controls
    // const controls = new OrbitControls(camera, renderer.domElement);

    const resetOrbitControl = () => {
      // controls.reset();
    };

    reset.current!.addEventListener("mousedown", resetOrbitControl);

    if (showdev) {
      scene.add(lightHelper, gridHelper , axis);
    }
    // the game loop
    // inputs
    const inputHandler = ({key}:KeyboardEvent) => {
      const up = ["ArrowUp", "W", "w"]
      const left = ["ArrowLeft", "A", "a"]
      const down = ["ArrowDown", "S", "s"]
      const right = ["ArrowRight", "D", "d"]
      
      // idk why I have this here but well...
      if (![...up, ...left, ...down, ...right].includes(key)) {
        return
      }

      if (up.includes(key)) {
        // console.log("Up")
        player.position.z = player.position.z - 1
      } else if (left.includes(key)) {
        // console.log("Left")
        player.position.x = player.position.x - 1
      } else if (down.includes(key)) {
        // console.log("Down")
        player.position.z = player.position.z + 1
      } else if (right.includes(key)) {
        // console.log("Right")
        player.position.x = player.position.x + 1
      }
    }

    // for whatever dumb fucking reason, this fires twice
    document.addEventListener("keydown", (e) => {
      inputHandler(e)
    })

    // loop
    const animate = () => {
      requestAnimationFrame(animate);

      camera.position.set(player.position.x + camx, camy, player.position.z + camz)

      // animation code
      // torus.rotation.x += 0.01;
      // torus.rotation.y += 0.005;
      // torus.rotation.z += 0.01;

      // animation code end
      renderer.render(scene, camera);
    };
    animate();

    // cleanup
    return () => {
      reset.current!.removeEventListener("mousedown", resetOrbitControl);
      document.removeEventListener("keydown", inputHandler);
    };
  }, []);

  return (
    <>
      <canvas className={styles.canvas} ref={canvas} />
      <main className={styles.main}>
        <button ref={reset} className={styles.reset}>
          reset
        </button>
      </main>
    </>
  );
}
