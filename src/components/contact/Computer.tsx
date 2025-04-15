import { useGLTF } from "@react-three/drei";
import {
  MathProps,
  ReactProps,
  EventHandlers,
  InstanceProps,
} from "@react-three/fiber";
import {
  Mutable,
  Overwrite,
} from "@react-three/fiber/dist/declarations/src/core/utils";
import { JSX } from "react/jsx-runtime";
import * as THREE from "three";

export function Computer(
  props: JSX.IntrinsicAttributes &
    Mutable<
      Overwrite<
        Partial<
          Overwrite<
            THREE.Group<THREE.Object3DEventMap>,
            MathProps<THREE.Group<THREE.Object3DEventMap>> &
              ReactProps<THREE.Group<THREE.Object3DEventMap>> &
              Partial<EventHandlers>
          >
        >,
        Omit<
          InstanceProps<
            THREE.Group<THREE.Object3DEventMap>,
            typeof THREE.Group
          >,
          "object"
        >
      >
    >
) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_1 as THREE.Mesh).geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_2 as THREE.Mesh).geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
