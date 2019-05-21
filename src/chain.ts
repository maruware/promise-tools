export function chain<T>(initialValue: T, catchCallback?: (e: Error) => void) {
  let prev = Promise.resolve(initialValue)
  return {
    add(next: (prevVal: T) => Promise<T>) {
      prev = prev.then(next).catch(e => {
        catchCallback && catchCallback(e)
        return next(null)
      })
      return prev
    }
  }
}
