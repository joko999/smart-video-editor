import React, { useState } from 'react';

const VideoUploader = () => {
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!videoFile) {
            alert('Please select a video file to upload.');
            return;
        }
        // Assuming you have an API endpoint to handle the upload
        const formData = new FormData();
        formData.append('video', videoFile);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Video uploaded successfully!');
            } else {
                alert('Failed to upload video.');
            }
        } catch (error) {
            console.error('Error uploading video:', error);
            alert('An error occurred during the upload.');
        }
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default VideoUploader;
