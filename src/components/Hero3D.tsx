import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Base continuous rotation
      const baseRotX = state.clock.elapsedTime * 0.05;
      const baseRotY = state.clock.elapsedTime * 0.08;
      
      // Mouse offset
      const targetX = (state.mouse.x * Math.PI) / 4;
      const targetY = (state.mouse.y * Math.PI) / 4;
      
      // Smoothly interpolate to the target rotation (base + offset)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, baseRotX + targetY, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, baseRotY + targetX, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Icosahedron args={[1, 4]} ref={meshRef} scale={2.8}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          wireframe={true}
          transparent={true}
          opacity={0.15}
        />
      </Icosahedron>
      <Icosahedron args={[1, 1]} scale={1.8}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.3}
          metalness={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.2}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <AnimatedMesh />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
