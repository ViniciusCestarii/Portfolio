import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Rainbow } from './Rainbow'

const RainbowScene = () => {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <color attach="background" args={['black']} />
      <Scene />
    </Canvas>
  )
}

export default RainbowScene

function Scene() {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta / 5))
  return <Rainbow ref={ref} startRadius={0.2} endRadius={0.65} fade={0} />
}
