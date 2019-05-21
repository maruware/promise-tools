export function chain<T>(initialValue: T, catchCallback?: (e: Error) => void) {
  let last = Promise.resolve(initialValue)
  return {
    add(next: (prevVal: T) => Promise<T>) {
      last = last.then(next, e => {
        console.log('e', e)
        catchCallback && catchCallback(e)
        return next(null)
      })
      return last
    }
  }
}
