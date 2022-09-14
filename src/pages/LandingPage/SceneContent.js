import React, { Suspense, useEffect } from 'react';
import {
    OrbitControls,
    Stars,
    PerspectiveCamera,
    Text,
    Float,
} from '@react-three/drei/native';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
function Portal() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/sphere/scene.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(0, -0.8, 0);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Sphere() {
    return (
        <mesh
            position={[0, -0.8, 0]}
            onClick={(e) => (window.location.href = '/dashboard')}
        >
            <sphereGeometry attach="geometry" args={[0.3, 32, 32]} />
            <meshPhongMaterial attach="material" color="white" />
        </mesh>
    );
}

// function Plane() {
//     return (
//         <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//             <planeGeometry attach="geometry" args={[100, 100]} />
//             <meshLambertMaterial attach="material" color="lightblue" />
//         </mesh>
//     );
// }

function TextName() {
    return (
        <Text
            position={[0, 0.5, 0]}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            fontSize={0.12}
        >
            Click the Core of this portal to enter!
        </Text>
    );
}

export default function SceneContent() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows="true">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    rotateSpeed={0.4}
                    zoomSpeed={0.4}
                    maxZoom={10}
                    minZoom={1}
                    // maxPolarAngle={1.45}
                />
                <fog attach="fog" args={['#202030', 10, 25]} />
                <TextName />
                <Float speed={4} rotaionIntensity={1.5} float Intensity={2.3}>
                    <Portal />
                </Float>
                <Float speed={2} rotaionIntensity={1} float Intensity={1}>
                    <Sphere />
                </Float>
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={7}
                    saturation={10}
                    fade={true}
                />
                <ambientLight intensity={50} />
                <hemisphereLight
                    intensity={2}
                    color="#eaeaea"
                    groundColor="blue"
                />
                <spotLight
                    intensity={10}
                    position={[10, 15, 10]}
                    angle={0.3}
                    penumbra={1}
                />
                {/* <Plane/> */}
            </Canvas>
        </Suspense>
    );
}
