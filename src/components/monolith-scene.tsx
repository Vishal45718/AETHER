"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/**
 * The Monolith — the emotional core.
 * 
 * A near-perfect obsidian slab.
 * Responds to cursor with subtle magnetic tilt.
 * Floats with slow, inertial drift.
 * Edge catches ambient champagne light.
 */
function Monolith({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotY = useRef(0);
  const targetRotX = useRef(0);
  const currentRotY = useRef(0);
  const currentRotX = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    // Cursor gravity — magnetic tilt toward cursor
    targetRotY.current = mouseX.current * 0.25;
    targetRotX.current = mouseY.current * -0.12;

    // Inertial smoothing
    currentRotY.current += (targetRotY.current - currentRotY.current) * 0.02;
    currentRotX.current += (targetRotX.current - currentRotX.current) * 0.02;

    groupRef.current.rotation.y = currentRotY.current;
    groupRef.current.rotation.x = currentRotX.current;

    // Breathing drift
    groupRef.current.position.y = Math.sin(t * 0.18) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Main monolith slab */}
      <mesh castShadow>
        <boxGeometry args={[1.6, 4.2, 0.35]} />
        <meshPhysicalMaterial
          color="#000000"
          metalness={1}
          roughness={0.0}
          clearcoat={1}
          clearcoatRoughness={0.0}
          reflectivity={1}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Edge glow — ultra-thin geometry on edges */}
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.008, 4.2, 0.35]} />
        <meshStandardMaterial
          color="#DDD8CF"
          emissive="#DDD8CF"
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.008, 4.2, 0.35]} />
        <meshStandardMaterial
          color="#DDD8CF"
          emissive="#DDD8CF"
          emissiveIntensity={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

/**
 * Ambient volumetric fog planes — pure CSS-grade fog in 3D space
 */
function VolumetricFog() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.05 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial
        color="#1a1a1a"
        transparent
        opacity={0.07}
        depthWrite={false}
      />
    </mesh>
  );
}

/**
 * Orbital node — a slow, barely-visible satellite point
 */
function OrbitalNode() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.12;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * 3;
      ref.current.position.y = Math.sin(t * 0.7) * 1.2;
      ref.current.position.z = Math.sin(t) * 1.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial
        color="#F5F1E8"
        emissive="#F5F1E8"
        emissiveIntensity={2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

/**
 * SceneSetup — handles cursor tracking inside the canvas
 */
function SceneSetup({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const { gl } = useThree();

  useFrame(() => {
    // Reading from refs set by parent
    void mouseX.current;
    void mouseY.current;
  });

  return null;
}

export function MonolithScene({ mouseX, mouseY }: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={38} />

        {/* Restrained lighting — champagne warmth only */}
        <ambientLight intensity={0.05} />

        {/* Main key light — top-right, warm edge */}
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.2}
          color="#F5F1E8"
        />

        {/* Counter light — left, very dim */}
        <directionalLight
          position={[-6, -2, -2]}
          intensity={0.15}
          color="#888880"
        />

        {/* Bottom rim — barely visible */}
        <pointLight position={[0, -5, 2]} intensity={0.3} color="#DDD8CF" distance={8} />

        <Float
          speed={0.6}
          rotationIntensity={0}
          floatIntensity={0}
        >
          <Monolith mouseX={mouseX} mouseY={mouseY} />
        </Float>

        <VolumetricFog />
        <OrbitalNode />
        <SceneSetup mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
