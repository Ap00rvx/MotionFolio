import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({
    color,
    speed = 1,
    scale = 1,
    orbitRadius = 0,
    orbitSpeed = 0.5,
    initialPhase = 0,
    yOffset = 0
}: {
    color: string,
    speed?: number,
    scale?: number,
    orbitRadius?: number,
    orbitSpeed?: number,
    initialPhase?: number,
    yOffset?: number
}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        // Revolution around Y axis
        if (groupRef.current && orbitRadius > 0) {
            groupRef.current.position.x = Math.cos(time * orbitSpeed + initialPhase) * orbitRadius;
            groupRef.current.position.z = Math.sin(time * orbitSpeed + initialPhase) * orbitRadius;
            groupRef.current.position.y = yOffset + Math.sin(time * 0.5) * 0.2; // Add slight vertical bobbing to orbit
        }

        if (meshRef.current) {
            // Self-rotation (faster on hover)
            const rotationMultiplier = hovered ? 5 : 1;
            meshRef.current.rotation.x += delta * 0.2 * speed * rotationMultiplier;
            meshRef.current.rotation.y += delta * 0.3 * speed * rotationMultiplier;

            // Smooth scale on hover
            const targetScale = hovered ? scale * 1.2 : scale;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    return (
        <group ref={groupRef} position={[0, yOffset, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <icosahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color={hovered ? "#ffffff" : color}
                        speed={hovered ? 4 : 2}
                        distort={0.4}
                        radius={1}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        </group>
    );
};

const Hero3D = () => {
    return (
        <group>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />

            {/* Center/Main Shape */}
            <FloatingShape color="#333333" scale={1.8} orbitRadius={0} orbitSpeed={0} />

            {/* Orbiting Satellites */}
            <FloatingShape color="#666666" scale={0.6} orbitRadius={3.5} orbitSpeed={0.4} initialPhase={0} yOffset={1.5} />
            <FloatingShape color="#4d4d4d" scale={0.5} orbitRadius={4} orbitSpeed={0.3} initialPhase={2} yOffset={-1.5} />
            <FloatingShape color="#1a1a1a" scale={0.4} orbitRadius={3} orbitSpeed={0.5} initialPhase={4} yOffset={0.5} />
            <FloatingShape color="#808080" scale={0.3} orbitRadius={2.5} orbitSpeed={0.6} initialPhase={5} yOffset={-0.5} />
        </group>
    );
};

export default Hero3D;
