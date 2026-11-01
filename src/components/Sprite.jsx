export default function Sprite({ src, className = '' }) {
  const fit = (img) => {
    if (img && img.complete) img.style.setProperty('--w', img.naturalWidth);
  };

  return (
    <img
      className={'sprite ' + className}
      src={src}
      alt=""
      ref={fit}
      onLoad={(e) => fit(e.currentTarget)}
    />
  );
}
