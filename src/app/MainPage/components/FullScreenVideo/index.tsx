import React, { FC } from 'react';
import styles from './styles.module.scss';
import backgroundPhoto from '../../assets/images/m2.png';
import backgroundVideo from '../../assets/videos/background.mp4';
import { IFullScreenVideo } from "./types";
import Image from "next/image";

const FullScreenVideo: FC<IFullScreenVideo> = ({mainTitle, className}) => (
  <div id="home" className={styles.fullscreenVideo}>
    <div className={styles.overlay}></div>
    <h1 className={styles.homeTitle}>
      {mainTitle}
    </h1>
    {/* <Image className={styles.backgroundPhoto} src={backgroundPhoto} alt={'background'} /> */}
    <video src={backgroundVideo}
     loop
     autoPlay
     muted
     playsInline
     className={styles.videoBg} />
  </div>
);

export default FullScreenVideo;