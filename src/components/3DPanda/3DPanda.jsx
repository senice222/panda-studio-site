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
    console.log('Available actions:', actions);
    const idleAction = actions['Armature'];
    console.log(actions)
    if (idleAction) {
      idleAction.setLoop(THREE.LoopRepeat);
      idleAction.play();
    } else {
      console.log('No idle123.002 action found.');
    }
  }, [actions]);


  return (
    <group ref={group} position={[0, -2.1, 0]} scale={[2.5, 2.5, 2.5]} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh name="Retopo_Player_SkinPandaVariant1_0004" geometry={nodes.Retopo_Player_SkinPandaVariant1_0004.geometry} material={materials.Material} skeleton={nodes.Retopo_Player_SkinPandaVariant1_0004.skeleton} />
          <skinnedMesh name="Vert" geometry={nodes.Vert.geometry} material={materials.Material} skeleton={nodes.Vert.skeleton} />
          <skinnedMesh name="Vert002" geometry={nodes.Vert002.geometry} material={materials.Material} skeleton={nodes.Vert002.skeleton} />
        </group>
        <directionalLight
          intensity={1}
          decay={2}
          position={[5.353, 2.162, 0.96]}
          rotation={[-1.205, 1.107, 1.165]}
          target={nodes.Sun002.target}
        >
          <primitive object={nodes.Sun002.target} position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          intensity={1.5}
          decay={2}
          position={[-3.824, 3.019, 3.243]}
          rotation={[-0.801, -0.677, -0.738]}
          target={nodes.Sun001.target}
        >
          <primitive object={nodes.Sun001.target} position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight
          intensity={2}
          decay={2}
          color="#ffb69a"
          position={[-0.889, 1.865, -3.326]}
          rotation={[-2.945, -0.109, 0.022]}
          target={nodes.Sun.target}
        >
          <primitive object={nodes.Sun.target} position={[0, 0, -1]} />
        </directionalLight>
        <pointLight
          name="Point002"
          intensity={0.5}
          decay={2}
          position={[0.083, 1.367, 0.507]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <pointLight
          name="Point001"
          intensity={0.5}
          decay={2}
          position={[-0.377, -0.072, 0.463]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <pointLight
          name="Point003"
          intensity={1}
          decay={2}
          color="#00a5ff"
          position={[0.063, 0.794, 0.389]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

const ThreeDPanda = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas
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
