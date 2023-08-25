import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Country } from "../utilis/interfaces";
import marker from "../assets/marker.png";
const Map = () => {
    const position: [number, number] = [51.505, 10.9]; // Initial position
    const [countries, setCountries] = React.useState<Country[]>([]);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => setCountries(data));
    }, []);
    const customMarker = L.icon({
        iconUrl: marker,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    });
    return (
        <MapContainer
            center={position}
            zoom={6}
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {countries.map((country: any) => (
                <Marker
                    icon={customMarker}
                    key={country.countryInfo._id}
                    position={[
                        country.countryInfo.lat,
                        country.countryInfo.long,
                    ]}
                >
                    <Popup>
                        <div>
                            <h3>{country.country}</h3>
                            <p>Active Cases: {country.countryInfo.active}</p>
                            <p>
                                Recovered Cases: {country.countryInfo.recovered}
                            </p>
                            <p>Deaths: {country.deaths}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
