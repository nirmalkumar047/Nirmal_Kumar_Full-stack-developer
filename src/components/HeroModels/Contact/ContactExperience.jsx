import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
const ContactExperience = () => {
  const texture = useLoader(TextureLoader, "/images/nkaa.png");
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <planeGeometry args={[9, 9]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};




export default ContactExperience;