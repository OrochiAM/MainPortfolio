export default function Sprite({ src, pixelSize, className = '' }) {
  const fit = (img) => {
    if (!img || !img.complete) return;

    img.style.setProperty('--w', img.naturalWidth);

    if (pixelSize) img.style.setProperty('--pixel', `${pixelSize}px`);
    else img.style.removeProperty('--pixel'); // let the CSS decide
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
