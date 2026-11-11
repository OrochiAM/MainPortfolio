import { useState } from 'react';
import File from './File';

export default function WordDocument() {
  const [textStyle, setTextStyle] = useState({});

  const toggle = (prop, value) => {
    setTextStyle((style) => {
      if (style[prop]) {
        const newStyle = { ...style };
        delete newStyle[prop];
        return newStyle;
      }

      return { ...style, [prop]: value };
    });
  };

  return (
    <File className="word-document" fileName={'Biography.docx'}>
      <div className="buttons">
        <button
          className={textStyle.fontWeight ? 'active' : ''}
          onClick={() => toggle('fontWeight', 'bold')}
        >
          B
        </button>
        <button
          className={textStyle.fontStyle ? 'active' : ''}
          onClick={() => toggle('fontStyle', 'italic')}
        >
          I
        </button>
        <button
          className={textStyle.color ? 'active' : ''}
          onClick={() => toggle('color', 'red')}
        >
          A
        </button>
      </div>

      <div className="text">
        <p style={textStyle}>
          I'm a frontend developer by vocation and education, with a
          long-standing passion for modern web technologies. I completed
          secondary school in Information Technology at the First Technical
          School in Kragujevac (2018-2022), and I'm now finishing my studies at
          the Faculty of Technical Sciences in Čačak (2022-2026), where I'm
          earning a degree as a Graduate Engineer of Information Technology. I'm
          motivated, curious, and quick to learn and adapt, and I do my best
          work as a team player, getting the strongest results through
          collaboration with others.
        </p>
      </div>
    </File>
  );
}
