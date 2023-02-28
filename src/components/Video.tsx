import i18next from 'i18next';
import i18nextConfig from '../../astro-i18next.config.mjs';

const Video = () => {
  return (
    <video
      className="absolute top-0 w-full h-full object-cover -z-10"
      id="title-card"
      loop
      autoPlay
      muted
    >
      <source
        src={
          i18next.language !== i18nextConfig.defaultLocale
            ? '../background.mp4'
            : 'background.mp4'
        }
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
