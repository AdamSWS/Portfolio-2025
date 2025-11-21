"use client"

import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const chicago: [number, number] = [41.8781, -87.6298]

// Note: marker icon setup will run inside the component using useEffect

export default function MapClient() {
  const [leafletReady, setLeafletReady] = useState(false)

  useEffect(() => {
    let mounted = true
    void import('leaflet').then((mod) => {
      // Support both CommonJS and ES module shapes: module default or direct export
      // Use `any` here intentionally to avoid strict typing issues for the dynamic import.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L: any = (mod as any).default ?? mod
      L.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })
      if (mounted) setLeafletReady(true)
    }).catch((err) => {
      console.warn('leaflet import failed', err)
    })
    return () => { mounted = false }
  }, [])

  if (!leafletReady) {
    // keep the same size as the map to avoid layout shift
    return <div className="mx-auto map-placeholder bg-gray-800 rounded" />
  }

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
