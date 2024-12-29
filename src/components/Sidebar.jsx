export default function Sidebar(props) {
  const {showModal, handleToggleModel, data} = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
