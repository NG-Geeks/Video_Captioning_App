"use client"
import React from 'react'
import ReactPlayer from 'react-player';
import { generateWebVTT } from '@/app/helpers/vttGenerator';

const VideoPlayer = ({ videoUrl,
    captions,
    currentTime,
    handleProgress,
    vttKey }) => {
    return (
        <div className="space-y-2">
            <h1 className="text-xl font-bold">Video:</h1>
            {videoUrl ? (
                <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                        onProgress={handleProgress}
                        config={{
                            file: {
                                tracks: [{
                                    kind: 'subtitles',
                                    src: `data:text/vtt;base64,${btoa(generateWebVTT(captions))}?t=${vttKey}`,
                                    srcLang: 'en',
                                    label: 'English',
                                    default: true
                                }]
                            }
                        }}
                    />
                </div>
            ) : (
                <div className="text-center p-4 bg-gray-800 rounded-lg min-h-[60px]">
                    Add URL of the Video to see the Video.
                </div>
            )}
        </div>
    );

}

export default VideoPlayer
