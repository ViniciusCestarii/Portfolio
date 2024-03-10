'use client'
/* eslint-disable react/no-unknown-property */

import * as THREE from 'three'
import { useRef, useMemo, useState, ReactNode } from 'react'
import { Canvas, CanvasProps, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from '@react-three/drei'
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useTheme } from '@mui/material'

function BackgroundScene(props: Partial<CanvasProps>) {
  const theme = useTheme()

  const connectors = [
    { color: '#444', roughness: 0.1 },
    { color: '#444', roughness: 0.1 },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
    { color: '#444', roughness: 0.1 },
    { color: '#444', roughness: 0.1 },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
    { color: theme.palette.primary.main, roughness: 0.1, accent: true },
  ]

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
      <color attach="background" args={['rgb(14, 14, 20)']} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <GravityController>
        <RigidBody
          position={[0, -0.1, 0]}
          type="kinematicPosition"
          colliders={false}
        >
          <CuboidCollider args={[1.5, 0.8, 1000]} />
        </RigidBody>
        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
            />
          </Model>
        </Connector>
      </GravityController>
      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  )
}

export default BackgroundScene

function GravityController({ children }: { children: ReactNode }) {
  const [physicsWorld, setPhysicsWorld] = useState([0, 0, 0])

  const time = useRef(0)

  useFrame(() => {
    const radius = 7
    const speed = 0.009
    time.current += speed

    // Calculate the new gravity vector
    const x = radius * Math.cos(time.current) * 1.6
    const y = radius * Math.sin(time.current)

    // Update the gravity
    setPhysicsWorld([x, y, 0])
  })

  return <Physics gravity={physicsWorld as any}>{children}</Physics>
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}: any) {
  const api = useRef<any>()
  const pos = useMemo(() => position || [Math.random() * 20 + 5, 20, r(20)], [])
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.04),
    )
  })
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      mass={r(20)}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[0.5]} />
      {children || <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  )
}

function Model({ children, color = 'white', roughness = 0, ...props }: any) {
  const ref = useRef<any>()
  const glb = useGLTF('/assets/models/planet.glb')
  const { nodes, materials } = glb as any
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.75, delta)
  })
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes.Planet_10.geometry}
    >
      <meshStandardMaterial
        metalness={0.4}
        roughness={roughness}
        map={materials.lens}
      />
      {children}
    </mesh>
  )
}
