import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { LatLngExpression } from 'leaflet'
import "leaflet/dist/leaflet.css";

import style from "./Map.module.css"


const position: LatLngExpression =  [-4.174142, -40.940081]

export function Mapa() {
    
    // detecta se o usuario está no iphone
    const isIOS = /iPad|iphone|iPod/.test(navigator.userAgent)

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`
    const appleMapsUrl = `https://maps.apple.com/?daddr=${position[0]},${position[1]}`

    return (
        <MapContainer  className={style.map} center={position} zoom={13}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       
            />
                 
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
