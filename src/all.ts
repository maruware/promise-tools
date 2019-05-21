export const all = (...args: Array<Promise<any>>) => {
  return Promise.all(args)
}
