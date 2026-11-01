import StickyNote from './StickyNote';
import ME from '../assets/images/meog.gif';
import BigCloud from '../assets/images/bigcloud.png';
import Sprite from './Sprite';

export default function HeaderContent() {
  return (
    <main className="header-content">
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
        <Sprite src={ME} className="me-gif" />
        <img src={BigCloud} className="me-cloud" alt="" />
        <img src={BigCloud} className="me-cloud" alt="" />
      </div>
    </main>
  );
}
