import React, { ReactNode } from "react";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Animated";


export default class ThreeElement extends React.Component {
    render(): ReactNode {
        return (
            <div className="canvas-container">
                <Canvas camera={{fov: 75, position: [0,2,3]}}>
                    {/* <OrbitControls/> */}
                    <ambientLight intensity={0.2} />
                    <directionalLight color="white" position={[0, 0, 2]} />
                    <Model/>
                </Canvas>
            </div>
        );
    }
}