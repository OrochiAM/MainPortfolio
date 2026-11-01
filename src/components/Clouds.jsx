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

      gsap.timeline({ repeat: -1 }).to(clouds, {
        duration: 20,
        ease: 'none',
        stagger: 5,
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
        onStart: () =>
          clouds.forEach((c) => gsap.set(c, { bottom: getRandom(70, 200) })),
      });
    },
    { scope: root },
  );

  return (
    <div className="clouds" ref={root}>
      <Sprite src={BigCloud} className="cloud" />
      <Sprite src={MediumCloud} className="cloud" />
      <Sprite src={SmallCloud} className="cloud" />
    </div>
  );
}
