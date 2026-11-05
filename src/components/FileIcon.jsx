import Sprite from './Sprite';

export default function FileIcon({ className = '', icon, children }) {
  return (
    <div className={'icon ' + className}>
      <div className="image">
        <Sprite src={icon} pixelSize={10} alt="" />
      </div>
      <h2 className="text">{children}</h2>
    </div>
  );
}
