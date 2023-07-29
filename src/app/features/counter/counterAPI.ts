export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) => {
    setTimeout(() => {
      return resolve({ data: amount })
    }, 500)
  })
}