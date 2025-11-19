import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useCursor } from "@react-three/drei";
import * as THREE from "three";

interface Smiley3DProps {
    forceSmile?: boolean;
}

const Smiley3D = ({ forceSmile = false }: Smiley3DProps) => {
    const [hovered, setHovered] = useState(false);
    const mouthRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useCursor(hovered);

    useFrame((state, delta) => {
        // Animate mouth scale for "mood"
        // Normal: Scale Y ~ 0.1 (flat), Happy: Scale Y ~ 1 (smile)
        // Trigger if hovered OR forceSmile is true
        const isSmiling = hovered || forceSmile;
        const targetScaleY = 1;

        if (mouthRef.current) {
            mouthRef.current.scale.y = THREE.MathUtils.lerp(mouthRef.current.scale.y, targetScaleY, delta * 20);
        }

        // Gentle floating/rotation for the whole head
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <Float speed={8} rotationIntensity={0.9} floatIntensity={0.5}>
            <group
                ref={groupRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                {/* Head */}
                <mesh>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color="#e6e6e6" roughness={0.2} metalness={0.5} />
                </mesh>

                {/* Eyes */}
                <group position={[0, 0.3, 1.3]}>
                    {/* Left Eye */}
                    <mesh position={[-0.5, 0, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#1a1a1a" />
                    </mesh>
                    {/* Right Eye */}
                    <mesh position={[0.5, 0, 0]}>
                        <sphereGeometry args={[0.15, 16, 16]} />
                        <meshStandardMaterial color="#1a1a1a" />
                    </mesh>
                </group>

                {/* Mouth */}
                {/* Torus segment for smile. Rotate to face forward and curve up. */}
                <mesh
                    ref={mouthRef}
                    position={[0, -0.3, 1.35]}
                    rotation={[0, 0, Math.PI]} // Rotate to make it a smile (U shape)
                >
                    {/* args: [radius, tube, radialSegments, tubularSegments, arc] */}
                    {/* We want a semi-circle. */}
                    <torusGeometry args={[0.6, 0.08, 16, 20, Math.PI]} />
                    <meshStandardMaterial color="#1a1a1a" />
                </mesh>
            </group>
        </Float>
    );
};

export default Smiley3D;
