import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import Bulb from '../assets/images/bulb.png';
import BulbOn from '../assets/images/bulb-on.png';
import Pull from '../assets/images/pull.png';
import Sprite from './Sprite';
gsap.registerPlugin(useGSAP, Draggable);

const icons = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/images/skills/*.{png,jpg,jpeg,gif,webp,svg}', {
      eager: true,
      import: 'default',
    }),
  ).map(([path, src]) => [
    path
      .split('/')
      .pop()
      .replace(/\.[^.]+$/, ''),
    src,
  ]),
);

const GROUPS = {
  Frontend: [
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'a11y',
    'GSAP',
    'React',
    'Astro',
    'Vue',
  ],
  Backend: ['Node', 'Express', 'PHP', 'Vitest', 'SQL'],
  Tools: ['WordPress', 'Git', 'Docker'],
};

const PULL = 60;

export default function Skills() {
  const root = useRef(null);
  const on = useRef(false);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      const tl = gsap
        .timeline({ paused: true })
        .to(q('.beam'), { autoAlpha: 1, duration: 0 })
        .to(q('.skills-title'), { color: '#000', duration: 0 }, '<');

      Draggable.create(q('.pull')[0], {
        type: 'y',
        bounds: { minY: 0, maxY: PULL },
        onDragEnd() {
          if (this.y > PULL / 2) {
            on.current = !on.current;
            root.current.classList.toggle('is-on', on.current);
            on.current ? tl.play() : tl.reverse();
          }
          gsap.to(this.target, {
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)',
          });
        },
      });
    },
    { scope: root },
  );

  return (
    <section className="skills-section" ref={root}>
      <div className="beam" />
      <div className="bulb">
        <div className="bulb-img">
          <Sprite src={Bulb} pixelSize={8} />
          <Sprite className="lit" src={BulbOn} pixelSize={8} />
        </div>
        <h2 className="skills-title">MY SKILLS</h2>
      </div>
      <Sprite className="pull" src={Pull} pixelSize={8} />

      <div className="skills-grid">
        {Object.entries(GROUPS).map(([group, list]) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="items">
              {list.map((name, i) => (
                <div className="skill" key={name} style={{ '--i': i }}>
                  <img src={icons[name.toLowerCase()]} alt="" />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
