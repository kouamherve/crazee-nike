export default function FirstSection() {
  return (
    <div className="w-full h-[500px] bg-dark">
      <video
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/5553467/5553467-sd_640_360_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
