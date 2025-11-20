"use client"

import React from 'react'
import MapClient from './MapClient'

export default function MapCard() {
  return (
    <div className="w-full max-w-sm card-gradient rounded-2xl p-6 mt-6">
      <div className="text-center">
        <h5 className="text-sm text-gray-400 mb-2">Where I&apos;m from</h5>
        <div className="mx-auto w-48 h-48">
          <MapClient />
        </div>
        <div className="mt-3">
          <p className="text-xs text-gray-400 text-center">Map data © OpenStreetMap contributors — tiles by CARTO</p>
        </div>
      </div>
    </div>
  )
}
