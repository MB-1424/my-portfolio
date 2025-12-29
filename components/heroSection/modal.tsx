import React from "react";

// Statue 3D modal disabled; legacy implementation is commented below.
export default function Modal() {
  return null;
}

/*
// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
  useVideoTexture,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
  BrightnessContrast,
  TiltShift2,
  WaterEffect,
  ToneMapping,
} from "@react-three/postprocessing";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect } from "react";

export default function Modal() {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position to range -0.5 to 0.5
      setMouseX(e.clientX / window.innerWidth - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      gl={{ antialias: false }}
      flat
      shadows
      camera={{ position: [0, 0, 8], fov: 35 }}
    >
      <ambientLight intensity={2} />
      <Scene
        position={[0, 0.1, 0]}
        scale={1.1}
        rotation={[0, 1.6 + mouseX * Math.PI, 0]}
      ></Scene>
      <Postpro />
    </Canvas>
  );
}

function Postpro() {
  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur luminanceThreshold={0.1} intensity={2} />
    </EffectComposer>
  );
}

function Cookie(props: any) {
  const texture = useVideoTexture("/video/caustics.mp4");
  return <spotLight decay={0} map={texture} castShadow {...props} />;
}

function Suzi(props: any) {
  const { nodes } = useGLTF("/3d/statue.glb");
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_3.geometry}
      {...props}
      dispose={null}
    >
      <meshStandardMaterial color="#353535" />
    </mesh>
  );
}

function Scene(props: any) {
  const gltf = useLoader(GLTFLoader, "/3d/statue.glb");
  return (
    <primitive object={gltf.scene} {...props}>
      <meshStandardMaterial color="#353535" />
    </primitive>
  );
}
*/
