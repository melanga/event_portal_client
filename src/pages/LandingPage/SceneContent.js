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

function Weddings() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/words/weddings.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.4, 0.4, 0.4);
        gltf.scene.position.set(-0.5, -1.2, 1.2);
        gltf.scene.rotation.set(-0.3, 0, -0.5);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 100;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Birthday() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/words/birthday.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.position.set(1, 0, 0.5);
        gltf.scene.rotation.set(-0.5, 1, 0.5);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 100;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Anniversary() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/words/anniversary.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.35, 0.35, 0.35);
        gltf.scene.position.set(-1.7, -0.5, 0.3);
        gltf.scene.rotation.set(0, -0.5, -0.2);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 100;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Expo() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/words/expo.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.4, 0.4, 0.4);
        gltf.scene.position.set(-0.5, 0.1, -1);
        gltf.scene.rotation.set(0, 0.5, 0.5);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 100;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Product() {
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + '/words/product.gltf'
    );

    useEffect(() => {
        gltf.scene.scale.set(0.3, 0.3, 0.3);
        gltf.scene.position.set(-0.5, -2, -1.5);
        gltf.scene.rotation.set(0.2, 0, 0.5);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 100;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} />;
}

function Sphere() {
    return (
        <mesh
            position={[0, -0.8, 0]}
            onClick={(e) => (window.location.href = '/Home')}
        >
            <sphereGeometry attach="geometry" args={[0.3, 32, 32]} />
            <meshPhongMaterial attach="material" color="white" />
        </mesh>
    );
}

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

export default class SceneContent extends React.Component<{}> {
    render() {
        return (
            <Suspense fallback={null}>
                <Canvas shadows="true">
                    <PerspectiveCamera makeDefault position={[0, 0, 5.5]} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        // autoRotate={true}
                        autoRotateSpeed={0.5}
                        rotateSpeed={0.4}
                        zoomSpeed={0.4}
                        // maxPolarAngle={1.45}
                    />
                    <fog attach="fog" args={['#202030', 10, 25]} />
                    <TextName />
                    <Float
                        speed={4}
                        rotaionIntensity={1.5}
                        float
                        Intensity={2.3}
                    >
                        <Portal />
                    </Float>
                    <Float speed={2} rotaionIntensity={1} float Intensity={1}>
                        <Sphere />
                    </Float>
                    <Float speed={4} rotaionIntensity={3} float Intensity={1}>
                        <Weddings />
                    </Float>
                    <Float
                        speed={3}
                        rotaionIntensity={2.5}
                        float
                        Intensity={2.5}
                    >
                        <Birthday />
                    </Float>
                    <Float speed={2} rotaionIntensity={5} float Intensity={5}>
                        <Anniversary />
                    </Float>
                    <Float speed={3.5} rotaionIntensity={3} float Intensity={3}>
                        <Expo />
                    </Float>
                    <Float speed={4} rotaionIntensity={2} float Intensity={2}>
                        <Product />
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
}
