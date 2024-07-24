import React, { FC, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { IFullScreenVideo } from "./types";

const FullScreenVideo: FC<IFullScreenVideo> = ({mainTitle, className}) => {
  const [videoSrc, setVideoSrc] = useState('');
  useEffect(() => {
    setVideoSrc('/assets/videos/video-back.mp4');
  }, []);

  return (
    <div id="home" className={styles.fullscreenVideo}>
      <div className={styles.overlay}></div>
      <h1 className={styles.homeTitle}>
        {mainTitle}
      </h1>
      <video 
        src={videoSrc}
        loop
        autoPlay
        muted
        playsInline
        className={styles.videoBg} 
      />
    </div>
  );
};

export default FullScreenVideo;