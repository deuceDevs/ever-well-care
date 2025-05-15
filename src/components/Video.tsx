const getEmbedUrl = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;

const VideoGallery = () => {
  const videoIds = ["czthYrYZFxs"]; // YouTube video ID

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
      {videoIds.map((id) => (
        <div
          key={id}
          className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src={getEmbedUrl(id)}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
