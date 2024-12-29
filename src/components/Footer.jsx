export default function Footer(props) {
  const {showModal, handleToggleModel, data} = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD Project</h1>
      </div>
      {!showModal && (
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      )}
    </footer>
  );
}
