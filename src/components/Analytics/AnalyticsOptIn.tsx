"use client"

import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'analytics:enabled'

export default function AnalyticsOptIn() {
  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      setEnabled(v === 'true')
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      if (enabled) {
        const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN
        if (token && !document.querySelector('script[data-cf-beacon]')) {
          const s = document.createElement('script')
          s.defer = true
          s.src = 'https://static.cloudflareinsights.com/beacon.min.js'
          s.setAttribute('data-cf-beacon', JSON.stringify({ token }))
          document.head.appendChild(s)
        }
        localStorage.setItem(STORAGE_KEY, 'true')
      } else {
        localStorage.setItem(STORAGE_KEY, 'false')
      }
    } catch {}
  }, [enabled])

  return (
    <div className="ml-4">
      <label className="inline-flex items-center gap-2 text-sm text-gray-300">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:ring-2 focus:ring-indigo-500"
          aria-label="Enable analytics"
        />
        <span className="text-xs">Enable analytics</span>
      </label>
    </div>
  )
}
