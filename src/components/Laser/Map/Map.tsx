import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";

import style from "./Map.module.css"

const position = [-4.174142, -40.940081]

export function Mapa() {
    // detecta se o usuario está no iphone
    const isIOS = /iPad|iphone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`
    const appleMapsUrl = `https://maps.apple.com/?daddr=${position[0]},${position[1]}`

    return (
        <MapContainer center={position} zoom={13} style={{height: "198px", width: "100%", borderRadius: "5px"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position}>
                <Popup >
                    <a className={style.link} href={isIOS ? appleMapsUrl : googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    📍 Traçar rota    
                    </a>    
                    
                </Popup>

            </Marker>
        </MapContainer>
    )
}
