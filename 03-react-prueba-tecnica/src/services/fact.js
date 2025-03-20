import * as Constants from '../utils/constants'

export const getRandomFact = async () => {
  const res = await fetch(Constants.API_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
