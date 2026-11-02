import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Sprite from './Sprite';
import BigCloud from '../assets/images/bigcloud.png';
import MediumCloud from '../assets/images/mediumcloud.png';
import SmallCloud from '../assets/images/smallcloud.png';

gsap.registerPlugin(useGSAP, MotionPathPlugin);

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function Clouds() {
  const root = useRef(null);

  useGSAP(
    () => {
      const clouds = gsap.utils.toArray('.cloud');
      const vw = window.innerWidth;
      const duration = 25;
      const gap = duration / clouds.length;

      clouds.forEach((cloud, i) => {
        const randomHeight = () =>
          gsap.set(cloud, { bottom: getRandom(110, 170) });
        randomHeight();

        gsap.to(cloud, {
          duration,
          ease: 'none',
          repeat: -1,
          delay: -i * gap,
          transformOrigin: 'center center',
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: -vw * 0.25, y: getRandom(-25, 25) },
              { x: -vw * 0.5, y: getRandom(35, 60) },
              { x: -vw * 0.75, y: getRandom(-45, -20) },
              { x: -vw * 1.0, y: getRandom(20, 45) },
              { x: -vw * 1.3, y: getRandom(-15, 15) },
            ],
            curviness: 1,
          },
          onRepeat: randomHeight,
        });
      });
    },
    { scope: root },
  );

  let ps = 6;

  return (
    <div className="clouds" ref={root}>
      <Sprite src={BigCloud} className="cloud" pixelSize={ps} />
      <Sprite src={MediumCloud} className="cloud" pixelSize={ps} />
      <Sprite src={SmallCloud} className="cloud" pixelSize={ps} />
      <Sprite src={BigCloud} className="cloud" pixelSize={ps} />
      <Sprite src={MediumCloud} className="cloud" pixelSize={ps} />
      <Sprite src={SmallCloud} className="cloud" pixelSize={ps} />
    </div>
  );
}
