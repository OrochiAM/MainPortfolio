export default function StickyNote({ children }) {
  return (
    <div className="sticky-note">
      <div className="text">
        <h2 className="title">Welcome.txt</h2>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
