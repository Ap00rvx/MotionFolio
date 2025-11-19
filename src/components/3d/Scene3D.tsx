import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

interface Scene3DProps {
    children: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
    enableControls?: boolean;
}

const Scene3D = ({
    children,
    className = "h-full w-full",
    cameraPosition = [0, 0, 5],
    enableControls = false
}: Scene3DProps) => {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: cameraPosition, fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    {children}
                    <Environment preset="city" />
                    {enableControls && <OrbitControls enableZoom={false} />}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene3D;
