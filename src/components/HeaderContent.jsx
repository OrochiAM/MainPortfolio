import StickyNote from './StickyNote';
import ME from '../assets/images/meog.gif';
import BigCloud from '../assets/images/bigcloud.png';
import MediumCloud from '../assets/images/mediumcloud.png';
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
        <Sprite src={ME} className="me-gif" pixelSize={4.3} />
        <Sprite src={BigCloud} className="me-cloud" pixelSize={9} />
        <Sprite src={BigCloud} className="me-cloud" pixelSize={9} />
        <Sprite src={MediumCloud} className="me-cloud" pixelSize={9} />
        <Sprite src={MediumCloud} className="me-cloud" pixelSize={9} />
      </div>
    </main>
  );
}
