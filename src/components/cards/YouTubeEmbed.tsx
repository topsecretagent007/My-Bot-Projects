import React from "react";

interface YouTubeEmbedProps {
  videoId: string; // The YouTube video ID
  title: string;   // The title of the video
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  return (
    <div className="flex justify-center items-center my-5">
      <iframe
        className="w-full max-w-2xl aspect-video border-none"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;