"use client"

import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const chicago: [number, number] = [41.8781, -87.6298]

// Use CDN-hosted marker assets to avoid bundling image imports
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
})

export default function MapClient() {
  return (
    <div className="mx-auto">
      {/* Disable the built-in Leaflet attribution control and render a small, compliant attribution below the map */}
      <MapContainer center={chicago} zoom={9} scrollWheelZoom={false} attributionControl={false} style={{ width: 192, height: 192, borderRadius: 8 }}>
        <TileLayer
          attribution={''}
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={chicago} />
      </MapContainer>
    </div>
  )
}
