'use client'
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Rainbow } from './Rainbow'

const RainbowScene = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Scene />
    </Canvas>
  )
}

export default RainbowScene

function Scene() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.z = 0))
  return (
    <Rainbow
      ref={ref}
      startRadius={0.1}
      endRadius={0.35}
      fade={0.4}
      position={[-8, 0, 0]}
    />
  )
}
