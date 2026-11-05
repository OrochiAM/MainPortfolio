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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          voluptatum voluptatem consectetur vel. Asperiores soluta cum omnis
          esse beatae culpa amet. Eius non sequi libero aliquam tempore iste,
          illum temporibus.
        </p>
      </div>
    </File>
  );
}
