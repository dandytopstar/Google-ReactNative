export const wait = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}