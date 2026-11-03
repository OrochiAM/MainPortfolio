import Clouds from './Clouds';
import HeaderContent from './HeaderContent';
import HeaderTop from './HeaderTop';
import Hills from './Hills';

export default function Header() {
  return (
    <>
      <header>
        <HeaderTop />
        <HeaderContent />
        <Clouds />
      </header>
      <Hills />
    </>
  );
}
