import BasicMap from "./BasicMap";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import Navbar from "./Navbar";
function App() {
  const { countries, loading } = useSelector((state) => state.data);

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row bg-gr">
          <div className="col-md-8">
            <BasicMap />
          </div>
          <div className="col-md-4">
           {!loading && countries && <CountryCard country={countries[0]} loading={loading} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
