import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON,Popup } from "react-leaflet";
import countiresData from "./data/countries.json";
import { useDispatch, useSelector } from "react-redux";
import {fetchCountires} from './redux/features/dataSlice'

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 20, lng: 100 });
  const ZOOM_LEVEL = 2;
  const [country, setCountry] = useState("india");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountires(country));
  }, [country, dispatch]);


  const mapRef = useRef();

  const eachCountry = (country, layer) => {

    layer.on({
      click: (event) => {
        setCountry(event.target.feature.properties.ADMIN);
        <Popup>{event.target.feature.properties.ADMIN}</Popup>
      },
    });
  };

  return (
    <>
      <div className="container pt-5">
        <MapContainer
          center={center}
          zoom={ZOOM_LEVEL}
          style={{ height: "500px", width: "100%" }}
          ref={mapRef}
        >
          <GeoJSON
            data={countiresData.features}
            onEachFeature={eachCountry}
          ></GeoJSON>
        </MapContainer>
      </div>
    </>
  );
};

export default BasicMap;
