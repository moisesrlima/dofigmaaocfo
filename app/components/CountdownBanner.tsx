'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { X } from 'lucide-react'

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isOfferActive, setIsOfferActive] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const offerEndTime = Cookies.get('offerEndTime')
    let endTime

    if (offerEndTime) {
      endTime = new Date(offerEndTime)
    } else {
      endTime = new Date()
      endTime.setDate(endTime.getDate() + 2)
      Cookies.set('offerEndTime', endTime.toISOString(), { expires: 2 })
    }

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = endTime.getTime() - now.getTime()

      if (difference > 0) {
        setIsOfferActive(true)
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setIsOfferActive(false)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      if (isBottom && isOfferActive) {
        setShowBanner(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOfferActive])

  const handleClose = () => {
    setShowBanner(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className="countdown-banner">
      <div className="container countdown-inner">
        <p>
          <strong>Oferta de lançamento por tempo limitado!</strong> A promoção termina em: 
          <span className="countdown-timer">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </p>
        <button onClick={handleClose} className="close-banner-button">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default CountdownBanner