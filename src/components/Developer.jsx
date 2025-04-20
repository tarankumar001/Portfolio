import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef();

    // Load the 3D model and clone it
    const { scene } = useGLTF('/models/animations/developer.glb');
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    // Load animations
    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
    const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
    const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

    // Guard clause to avoid crashing if any animation fails
    if (!idleAnimation[0] || !saluteAnimation[0] || !clappingAnimation[0] || !victoryAnimation[0]) {
        console.warn('One or more animations failed to load.');
        return null;
    }

    // Rename animations for easy access
    idleAnimation[0].name = 'idle';
    saluteAnimation[0].name = 'salute';
    clappingAnimation[0].name = 'clapping';
    victoryAnimation[0].name = 'victory';

    // Initialize animations
    const { actions } = useAnimations(
        [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
        group
    );

    // Play the current animation based on animationName prop
    useEffect(() => {
        const action = actions?.[animationName];
        if (action) {
            action.reset().fadeIn(0.5).play();
        }

        // Cleanup: fade out the animation when component unmounts or animation changes
        return () => {
            if (action) {
                action.fadeOut(0.5);
            }
        };
    }, [animationName, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Render the entire cloned model */}
            <primitive object={clone} />

            {/* Render all skinned meshes */}
            {Object.values(nodes).map((node, i) => {
                if (!node.isSkinnedMesh) return null;
                return (
                    <skinnedMesh
                        key={i}
                        geometry={node.geometry}
                        material={materials[node.material?.name]}
                        skeleton={node.skeleton}
                        morphTargetDictionary={node.morphTargetDictionary}
                        morphTargetInfluences={node.morphTargetInfluences}
                    />
                );
            })}
        </group>
    );
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
