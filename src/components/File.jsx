import X from '../assets/images/close.png';

export default function File({ className = '', fileName, children }) {
  return (
    <section className={'file ' + className}>
      <div className="header">
        <h2>{fileName}</h2>
        <button>
          <img src={X} alt="" />
        </button>
      </div>
      <main>{children}</main>
    </section>
  );
}
