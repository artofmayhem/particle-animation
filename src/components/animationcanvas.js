import {Canvas} from 'react-three-fiber'
import Points from "./points";
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";

function AnimationCanvas() {
    return (
        <Canvas
            colorManagement={false}
            camera={{position: [100, 10, 0], fov: 40}}
        >
            <Suspense fallback={null}>
                <Points/>
            </Suspense>
            {/*<CameraControls />*/}
            <OrbitControls />
        </Canvas>
    )
}

export default AnimationCanvas;