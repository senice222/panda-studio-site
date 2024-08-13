import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three';

export function Model(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/pandaAnimation.gltf')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.idle123) {
      actions.idle123.setLoop(THREE.LoopRepeat);
      actions.idle123.play();
    }
  }, [actions]);
  
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <group ref={group} {...props} position={[0, -1.5, 0]} scale={[2, 2, 2]} dispose={null} onPointerDown={handleClick}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh name="Retopo_Player_SkinPandaVariant1_0004" geometry={nodes.Retopo_Player_SkinPandaVariant1_0004.geometry} material={materials.Material} skeleton={nodes.Retopo_Player_SkinPandaVariant1_0004.skeleton} />
          <skinnedMesh name="Vert002" geometry={nodes.Vert002.geometry} material={materials.Material} skeleton={nodes.Vert002.skeleton} />
          <skinnedMesh name="Vert" geometry={nodes.Vert.geometry} material={materials.Material} skeleton={nodes.Vert.skeleton} morphTargetDictionary={nodes.Vert.morphTargetDictionary} morphTargetInfluences={nodes.Vert.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

const ThreeDPanda = () => {

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas
        frameloop="demand"
        style={{ height: '1000px', width: '1000px' }}
        camera={{ position: [-2, 2, 5], fov: 45, near: 0.1, far: 200 }}
      >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
        <ambientLight intensity={0.5} />
        <Suspense>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeDPanda
