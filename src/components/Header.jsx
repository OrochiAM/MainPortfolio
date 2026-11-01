import Clouds from './Clouds';
import HeaderContent from './HeaderContent';
import HeaderTop from './HeaderTop';

export default function Header() {
  return (
    <header>
      <HeaderTop />
      <HeaderContent />
      <Clouds />
    </header>
  );
}
