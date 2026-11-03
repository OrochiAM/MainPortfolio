import StickyNote from './StickyNote';
import ME from '../assets/images/meog.gif';

import Birds from '../assets/images/birds.gif';
import Sprite from './Sprite';

export default function HeaderContent() {
  return (
    <main className="header-content">
      <Sprite src={Birds} className="birds" pixelSize={8} />
      <Sprite src={Birds} className="birds" pixelSize={7} />

      <StickyNote>
        <p>Hello,</p>
        <p>The name is</p>
        <p>Aleksa Milić</p>
        <p>I'm a frontend developer</p>
        <p style={{ justifyContent: 'center' }}></p>
        <p style={{ justifyContent: 'center' }}>Welcome to my Portfolio</p>
        <p style={{ justifyContent: 'center' }}>{'<'}3</p>
      </StickyNote>

      <div className="me-image">
        <Sprite src={ME} className="me-image" pixelSize={4.3} />
      </div>
    </main>
  );
}
