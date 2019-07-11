export class TimeoutError extends Error {
  constructor(ms: number) {
    super(`timeout with ${ms}ms`)
  }
}

export function timeout(ms: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => reject(new TimeoutError(ms)), ms)
  })
}
