"use client"

import { motion, useReducedMotion } from 'motion/react'
import React from 'react'

type Direction = 'up' | 'down' | 'left' | 'right'

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
  direction?: Direction
}

export default function Reveal({ children, delay = 0, className, y = 16, direction = 'up' }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  const offset =
    direction === 'left' ? { x: -y, y: 0 } :
    direction === 'right' ? { x: y, y: 0 } :
    direction === 'down' ? { x: 0, y: -y } :
    { x: 0, y }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
