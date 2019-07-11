export function all<T>(...promises: Promise<T>[]) {
  return Promise.all(promises)
}
