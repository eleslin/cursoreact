import { useState, useEffect } from 'react'
import * as Constants from '../utils/constants'

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    // On every fact change, fetch the associated img
    fetch(`${Constants.API_IMAGE}${firstWord}?json=true`)
      .then((res) => res.json())
      .then((data) => setImgUrl(data.url))
  }, [fact])

  return { imgUrl }
}
