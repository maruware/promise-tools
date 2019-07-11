/* eslint-env jest */

import { each } from '../src/each'

describe('each test', () => {
  it('each should work', async () => {
    const a = [1, 2, 3]
    const f = (n: number) => {
      return Promise.resolve(n.toString())
    }
    const r = await each(a, f)
    expect(r).toEqual(['1', '2', '3'])
  })
})
