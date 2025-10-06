import React from 'react';
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';


import cardGLB from '../../../assets/lanyard/card.glb';
import lanyard from '../../../assets/lanyard/lanyard.png';
import { GoArrowDownRight } from "react-icons/go";
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
      <div className='font-medium' style={{ fontFamily: '"Boldonse", system-ui' }}>
        {/* Resume Button */}
        <a
        //   href={Harshbarman}  i have to import the rsume
        //   download="HarshBarman_Resume.pdf"
        className="fixed left-0 top-1/2 -translate-y-1/2 flex items-center justify-between bg-[#1f1f1f] px-5 py-3 rounded-r-[50px] no-underline w-[290px] h-[100px] transition-all duration-300 ease-in-out origin-left hover:bg-[#222] hover:scale-105 hover:-translate-y-1/2"
        >
        <span className="ml-5 text-[30px] text-white font-medium">
            Resume
        </span>
        <span className="h-[70px] w-[70px] bg-[#999D9E] rounded-full text-xl flex items-center">
            <span 
            className="ml-3 inline-block w-12 h-12 bg-no-repeat bg-contain"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath stroke-dasharray='2 4' stroke-dashoffset='6' d='M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9'%3E%3Canimate attributeName='stroke-dashoffset' dur='0.66s' repeatCount='indefinite' values='6;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='32' stroke-dashoffset='32' d='M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.11s' dur='0.44s' values='32;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='10' stroke-dashoffset='10' d='M12 8v7.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.55s' dur='0.22s' values='10;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='6' stroke-dashoffset='6' d='M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.77s' dur='0.22s' values='6;0'/%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`
            }}
            />
        </span>
        </a>
        <div className="fixed right-[0px] top-1/2 -translate-y-1/2 flex flex-col items-start z-[1000] text-white text-[2.5rem] gap-6">
          <GoArrowDownRight className="resume-heading-icon text-[3rem]" />
          <h2 > Developer & Designer</h2>
        </div>
      </div>
    </div>
  );
}
function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() => typeof window !== 'undefined' && window.innerWidth < 1024);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 2]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 2.2, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[-0.6, 6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[1, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[3, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[5, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[1.2, 1.7, 0.01]} />
          <group
            scale={3}
            position={[0, -1.8, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
