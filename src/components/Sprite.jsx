export default function Sprite({ src, pixelSize = 1, className = '' }) {
  const fit = (img) => {
    if (img && img.complete) {
      img.style.setProperty('--w', img.naturalWidth);

      if (pixelSize) img.style.setProperty('--pixel', `${pixelSize}px`);
    }
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
