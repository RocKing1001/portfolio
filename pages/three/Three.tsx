import styles from "../../styles/Three.module.scss";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Three() {
  // reference for the canvas element
  const canvas = useRef<HTMLCanvasElement>(null);
  const reset = useRef<HTMLButtonElement>(null);

  // all the threejs code goes here
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current! });

    // initialisation
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);

    // main code
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6346 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // light
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    // helpers
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    const resetOrbitControl = () => {
      controls.reset();
    };

    reset.current!.addEventListener(
      "mousedown",
      resetOrbitControl
    );

    scene.add(lightHelper, gridHelper);
    // the game loop
    const animate = () => {
      requestAnimationFrame(animate);

      // animation code
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      // animation code end
      renderer.render(scene, camera);
    };
    animate();
    

    // cleanup
    return () => {
      reset.current!.removeEventListener('mousedown', resetOrbitControl)
    }
  }, []);

  // canvas to render on
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
