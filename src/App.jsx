import {useState, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModel() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA=${today}`;
      if (localStorage.getItem(localKey)) {
        const data = JSON.parse(localStorage.getItem(localKey));
        setData(data);
        console.log('Fetch from local storage');
        return;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        localStorage.setItem(localKey, JSON.stringify(data))
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Sidebar data={data} handleToggleModel={handleToggleModel} />
      )}
      {data && (
        <Footer
          data={data}
          handleToggleModel={handleToggleModel}
          showModal={showModal}
        />
      )}
    </>
  );
}

export default App;
