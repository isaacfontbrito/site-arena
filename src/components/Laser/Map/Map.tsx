import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css";

import style from "./Map.module.css"
import { useEffect } from "react";

const position = [-4.174142, -40.940081]

function SetViewOnPosition({ position }) {
    const map = useMap()
    useEffect(() => {
        map.setView(position, 13)
    }, [map, position])
    return null
}

export function Mapa() {
    // detecta se o usuario está no iphone
    const isIOS = /iPad|iphone|iPod/.test(navigator.userAgent)

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`
    const appleMapsUrl = `https://maps.apple.com/?daddr=${position[0]},${position[1]}`

    return (
        <MapContainer  style={{height: "198px", width: "100%", borderRadius: "1px"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <SetViewOnPosition position={position}/>
                 
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
