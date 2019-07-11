export async function each<T, D>(
  targets: T[],
  process: (target: T) => Promise<D>
) {
  const results: D[] = []
  for (let target of targets) {
    const r = await process(target)
    results.push(r)
  }
  return results
}
