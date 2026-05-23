import "./Loader.css";

function Loader({ cards = 6, height = "220px" }) {
  return (
    <div className="loader-grid">
      {Array.from({
        length: cards,
      }).map((_, index) => (
        <div key={index} className="loader-card">
          <div
            className="loader-image"
            style={{
              height,
            }}
          ></div>

          <div className="loader-line large"></div>

          <div className="loader-line medium"></div>

          <div className="loader-line small"></div>
        </div>
      ))}
    </div>
  );
}

export default Loader;
