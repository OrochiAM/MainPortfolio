import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ID from './ID';
import File from './File';
import Sprite from './Sprite';
import WordDocument from './WordDocument';
import FileIcon from './FileIcon';

import FolderIcon from '../assets/images/folder.png';
import Cursor from '../assets/images/cursors/pointer.png';
import FileIconImg from '../assets/images/file.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutMe() {
  const root = useRef(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const section = root.current;
      const cursor = q('.cursor')[0];
      const folderIcon = q('.folder-icon')[0]; // the first one is the top icon
      const containers = q('[class$="-container"]');

      // centre of an element, measured from the section's top-left (the cursor's origin)
      const centerOf = (el) => {
        const s = section.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        return {
          x: r.left - s.left + r.width / 2,
          y: r.top - s.top + r.height / 2,
        };
      };

      // the element an icon is covering
      const contentOf = (c) =>
        [...c.children].find((el) => !el.classList.contains('icon'));

      containers.forEach((c) => gsap.set(contentOf(c), { autoAlpha: 0 }));
      gsap.set(cursor, { autoAlpha: 0, transformOrigin: 'top left' });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 55%', once: true },
      });

      tl.set(cursor, {
        x: () => {
          const s = section.getBoundingClientRect();
          return folderIcon.getBoundingClientRect().right - s.left + 30;
        },
        y: () => centerOf(folderIcon).y,
        autoAlpha: 1,
      });

      containers.forEach((c, i) => {
        const icon = c.querySelector('.icon');
        const content = contentOf(c);

        if (!icon) {
          tl.to(content, { autoAlpha: 1, duration: 0.3 }, '+=0.3');
          return;
        }

        const target = icon.querySelector('img');

        tl.to(
          cursor,
          { x: () => centerOf(target).x, duration: 1.4, ease: 'power2.inOut' },
          '+=0.3',
        );
        tl.to(
          cursor,
          {
            y: () => centerOf(target).y,
            duration: 1.4,
            ease: i % 2 ? 'power3.in' : 'power3.out',
          },
          '<',
        );

        tl.to(
          cursor,
          { scale: 0.8, duration: 0.08, repeat: 3, yoyo: true },
          '>',
        );
        tl.add(() => icon.classList.add('active'), '<');

        tl.to(icon, { autoAlpha: 0, duration: 0.2 }, '+=0.15');
        tl.fromTo(
          content,
          { autoAlpha: 0, scale: 0.9 },
          { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' },
          '<',
        );
      });

      tl.to(cursor, { autoAlpha: 0, duration: 0.4 }, '+=0.4');
    },
    { scope: root },
  );

  return (
    <section className="about-me-section" ref={root}>
      <FileIcon className="folder-icon" icon={FolderIcon}>
        About Me
      </FileIcon>
      <Sprite className="cursor" src={Cursor} pixelSize={2} />
      <File className="folder" fileName={'About Me'}>
        <div className="id-container">
          <ID />
          <FileIcon className="folder-icon" icon={FileIconImg}>
            ID.png
          </FileIcon>
        </div>
        <div className="word-container">
          <WordDocument />
          <FileIcon className="folder-icon" icon={FileIconImg}>
            Notes.docx
          </FileIcon>
        </div>
        <div className="word-container">
          <WordDocument />
          <FileIcon className="folder-icon" icon={FileIconImg}>
            Skills.docx
          </FileIcon>
        </div>
      </File>
    </section>
  );
}
