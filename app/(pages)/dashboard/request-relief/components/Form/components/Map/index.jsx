import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const center = [35.7249, -308.5904];
const zoom = 16;
function DisplayPosition({ map, setLongData, setLatData }) {
  const [position, setPosition] = useState(() => map.getCenter());
  /*  const onClick = useCallback(() => {
     map.setView(center, zoom);
   }, [map]); */
  const onMove = useCallback(() => {
    setPosition(map.getCenter());
    setLongData(position.lng.toFixed(4));
    setLatData(position.lat.toFixed(4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);
  // useEffect(() => {
  //   console.log(position);
  //   console.log(latData);
  //   console.log(longData);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [position]);

  return (
    <p>
      {/* latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}
      <button onClick={onClick}>reset</button> */}
    </p>
  );
}

export default function MyMap({ setLongData, setLatData, latData, longData }) {
  const [map, setMap] = useState(null);
  const displayMap = useMemo(
    () => (
      <section className="relative  xl:w-full">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          ref={setMap}
        >
          <Image
                      alt=""
                      src="/assets/icons/pin.png"
                      width={40}
                      height={50}
                      className="absolute right-[50%] top-[50%] z-[1000]  h-auto w-[30px] translate-x-[50%] translate-y-[-50%] xl:w-[40px]"
                    />

          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </MapContainer>
      </section>
    ),
    [],
  );
  return (
    <>
      <div className="  w-[90%]  mx-auto xl:w-full">

        <section className="text-[red] font-medium text-[16px] mb-3">محل دقیق خود را انتخاب کنید.</section>
        {map ? (
          <DisplayPosition
            map={map}
            setLongData={setLongData}
            setLatData={setLatData}
            longData={longData}
            latData={latData}
          />
        ) : null}
        {displayMap}
      </div>
    </>
  );
}
