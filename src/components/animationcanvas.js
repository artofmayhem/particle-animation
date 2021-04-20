import {Canvas} from 'react-three-fiber'
import Points from "./points";

export default function AnimationCanvas() {
    return (
        <Canvas
            colorManagement={false}
            camera={{position: [100, 10, 0], fov:40}}
        >
            <Points/>
           {/*<CameraControls />*/}
        </Canvas>
    )
}