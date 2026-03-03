import React from 'react';

const App = () => {
  return (
    <div className="video-editor">
      <h1>Smart Video Editor</h1>
      <div className="editor-controls">
        <button>Upload Video</button>
        <button>Edit</button>
        <button>Save</button>
      </div>
      <div className="video-preview">
        <video controls></video>
      </div>
    </div>
  );
};

export default App;