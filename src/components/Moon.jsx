import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Moon(props) {
  const { nodes, materials } = useGLTF('/modals/moon.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} rotation={[-Math.PI, 0, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/modals/moon.gltf')
