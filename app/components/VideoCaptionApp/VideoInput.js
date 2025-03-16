"use client"
import React from 'react'

const VideoInput = ({ videoUrl, setVideoUrl }) => {
    return (
        <div className="space-y-2">
            <h1 className="text-xl font-bold">Enter the URL of the Video:</h1>
            <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter video URL (e.g., https://example.com/video.mp4)"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
        </div>
    );
}

export default VideoInput
