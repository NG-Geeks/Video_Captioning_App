"use client"
import { useState, useRef } from 'react';
import VideoInput from '@/app/components/VideoCaptionApp/VideoInput';
import VideoPlayer from '@/app/components/VideoCaptionApp/VideoPlayer';
import CurrentCaption from '@/app/components/VideoCaptionApp/CurrentCaption';
import CaptionForm from '@/app/components/VideoCaptionApp/CaptionForm';
import CaptionTimeline from '@/app/components/VideoCaptionApp/CaptionTimeline';
import Head from 'next/head';

export default function VideoCaptionApp() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [captionText, setCaptionText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [currentCaption, setCurrentCaption] = useState('');
  const [vttKey, setVttKey] = useState(Date.now());
  const playerRef = useRef(null);

  const handleAddCaption = (e) => {
    e.preventDefault();
    const start = parseFloat(startTime);
    const end = parseFloat(endTime);

    if (captionText && start < end) {
      setCaptions(prev => {
        const newCaptions = [...prev, { text: captionText, start, end }]
          .sort((a, b) => a.start - b.start);
        setVttKey(Date.now());
        return newCaptions;
      });

      setCaptionText('');
      setStartTime('');
      setEndTime('');
    }
  };

  const handleProgress = (state) => {
    setCurrentTime(state.playedSeconds);
    const activeCaption = captions.find(c =>
      state.playedSeconds >= c.start && state.playedSeconds <= c.end
    );
    setCurrentCaption(activeCaption ? activeCaption.text : '');
  };

  return (
    <>
      <Head>
        <title>Home Page - CaptionStudio</title>
        <meta name="description" content="Welcome to the home page of my caption adding to video website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-800 to-indigo-900 text-gray-100 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />

          <VideoPlayer
            videoUrl={videoUrl}
            captions={captions}
            currentTime={currentTime}
            handleProgress={handleProgress}
            vttKey={vttKey}
          />

          <CurrentCaption currentCaption={currentCaption} />

          <CaptionForm
            captionText={captionText}
            startTime={startTime}
            endTime={endTime}
            setCaptionText={setCaptionText}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
            handleAddCaption={handleAddCaption}
          />

          {captions.length > 0 && (
            <CaptionTimeline captions={captions} currentTime={currentTime} />
          )}
        </div>
      </div>
    </>
  );
}