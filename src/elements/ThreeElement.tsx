import React, { ReactNode } from "react";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';


type Props = {
    width: number,
    height: number
}
type States = {
    clicked: boolean,
    hovered: boolean
}

export default class ThreeElement extends React.Component<Props, States> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            clicked: false,
            hovered: false
        };
    }
    componentDidMount(): void {
    }
    render(): ReactNode {
        return (
            <div className="canvas-container">
                <Canvas>
                    <ambientLight intensity={0.2} />
                    <directionalLight color="white" position={[0, 0, 2]} />
                    <mesh
                        onPointerOver={(event) => this.setState({ hovered: true })}
                        onPointerOut={(event) => this.setState({ hovered: false })}
                        onClick={(event) => { this.setState({ clicked: !this.state.clicked }) }}
                        scale={this.state.clicked ? 1.5 : 1}
                        position={[0, 0, 2]}
                        rotation={[0,1,0]}
                    >
                        <boxGeometry />
                        <meshStandardMaterial color={this.state.hovered ? "hotpink" : "orange"} />
                    </mesh>
                </Canvas>
            </div>
        );
    }
}