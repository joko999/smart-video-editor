import React from 'react';

const SceneSelector = ({ scenes, onSelect }) => {
    return (
        <div className="scene-selector">
            <h2>Select a Scene</h2>
            <ul>
                {scenes.map((scene, index) => (
                    <li key={index} onClick={() => onSelect(scene)}>
                        <img src={scene.thumbnail} alt={`Scene ${index}`} />
                        <p>{scene.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SceneSelector;