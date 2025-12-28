import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import * as random from 'maath/random'
import * as THREE from 'three'

export default function InteractiveBackground() {
  const pointsRef = useRef()
  const { mouse } = useThree()

  // 🌌 Dense particle universe
  const particles = useMemo(
    () => random.inSphere(new Float32Array(9000), { radius: 2.2 }),
    []
  )

  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.elapsedTime

    // Subtle rotation
    pointsRef.current.rotation.y = time * 0.04
    pointsRef.current.rotation.x = time * 0.02

    // Mouse parallax (very smooth)
    pointsRef.current.rotation.y += mouse.x * 0.3
    pointsRef.current.rotation.x += mouse.y * 0.3
  })

  return (
    <group>
      {/* ✨ PARTICLE FIELD */}
      <Points
        ref={pointsRef}
        positions={particles}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#8B5CF6"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* 💎 FLOATING GLASS ORBS */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[-2.2, 1.2, -0.5]}>
          <sphereGeometry args={[0.32, 64, 64]} />
          <meshPhysicalMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.9}
            transmission={0.6}
            thickness={0.3}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[2, -1.5, 0.8]}>
          <icosahedronGeometry args={[0.28, 2]} />
          <meshPhysicalMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.85}
            transmission={0.5}
            thickness={0.25}
            clearcoat={1}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.4}>
        <mesh position={[0.8, 2.3, -1]}>
          <torusKnotGeometry args={[0.22, 0.08, 120, 16]} />
          <meshPhysicalMaterial
            color="#EC4899"
            emissive="#EC4899"
            emissiveIntensity={0.4}
            roughness={0.12}
            metalness={0.9}
            transmission={0.55}
            thickness={0.3}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* 🌈 LIGHTING */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <pointLight position={[-6, -4, -6]} intensity={1} color="#8B5CF6" />
      <pointLight position={[6, 4, 6]} intensity={0.8} color="#3B82F6" />
    </group>
  )
}
