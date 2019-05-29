export interface Deferred<T> {
  resolve: (value?: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  promise: Promise<T>
}

export function defer<T>() {
  let resolve_: (value?: T | PromiseLike<T>) => void
  let reject_: (reason?: any) => void
  const promise = new Promise<T>((resolve, reject) => {
    resolve_ = resolve
    reject_ = reject
  })

  const deferred: Deferred<T> = {
    resolve: resolve_,
    reject: reject_,
    promise
  }
  return deferred
}
