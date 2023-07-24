import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function MoonHalf(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/modals/moonhalf.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="exporting_layers">
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Default OBJ.005']} rotation={[0, 0.003, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/modals/moonhalf.gltf')
