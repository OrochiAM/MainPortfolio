export default function ID() {
  return (
    <div className="id">
      <div className="title">
        <h2>IDENTIFICATION CARD</h2>
      </div>
      <div className="content">
        <div className="img"></div>
        <div className="info">
          <div className="name-section">
            <div className="name">
              <p className="title">Name:</p>
              <p className="text">Aleksa</p>
            </div>
            <div className="last-name">
              <p className="title">Last Name:</p>
              <p className="text">Milić</p>
            </div>
          </div>
          <div className="date-of-birth">
            <p className="title">Date of Birth:</p>
            <p className="text">27.09.2003</p>
          </div>
          <div className="adress-section">
            <div className="city">
              <p className="title">City:</p>
              <p className="text">Kragujevac</p>
            </div>
            <div className="country">
              <p className="title">Country:</p>
              <p className="text">Serbia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
