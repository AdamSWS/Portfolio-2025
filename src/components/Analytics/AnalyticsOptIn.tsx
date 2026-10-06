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
    <div>
      <label className="inline-flex items-center gap-1.5 py-3 lg:py-0 text-white">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="w-3 h-3"
          aria-label="Enable analytics"
        />
        <span className="text-xs"><span className="lg:hidden">Analytics</span><span className="hidden lg:inline">Enable analytics</span></span>
      </label>
    </div>
  )
}
