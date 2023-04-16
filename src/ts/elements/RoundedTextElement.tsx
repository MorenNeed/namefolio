import { Canvas, extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from "@react-three/drei";
import { useControls } from 'leva';
import { Suspense } from 'react'
import { Environment, Lightformer } from '@react-three/drei'
import TextElement from './TextElement';

extend({ TextGeometry });

export default function RoundedTextElement() {
    const config = useControls('Text', {
        text: 'MY PROJECTS - MY PROJECTS - MY PROJECTS - ',
        color: '#191427',
        fontSize: { value: 1, min: 0.1, max: 2 },
        fontDepth: { value: 0.5, min: 0.01, max: 3.5 },
        uRadius: { value: 3, min: 0.1, max: 3 },
        uTwists: { value: 3, min: 0, max: 3, step: 1 },
        uTwistSpeed: { value: 10, min: 0, max: 100, step: 1 },
        uRotateSpeed: { value: 1, min: 0, max: 3, step: 0.01 }
    });
    return (
        <div className="three-rounded-text" style={{width: '100%', height: '100%'}}>
            <Canvas shadows camera={{ position: [0, 2, 5], zoom: 0.9 }} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={null}>
                    <TextElement config={config} />
                </Suspense>
                <Environment resolution={32}>
                    <group rotation={[-Math.PI / 4, -0.3, 0]}>
                        <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[1, 1, 1]} />
                    </group>
                </Environment>

                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <OrbitControls
                    autoRotateSpeed={-0.1}
                    zoomSpeed={0.25}
                    minZoom={20}
                    maxZoom={100}
                    enablePan={false}
                    dampingFactor={0.05}
                    minPolarAngle={-Math.PI / 2}
                    maxPolarAngle={(0.99 * Math.PI) / 2}
                /> */}
            </Canvas>
        </div>
    );
}