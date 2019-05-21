/* eslint-env jest */

import { chain } from '../src/chain'

describe('chain test', () => {
  it('chain should work', async () => {
    const q = chain('')
    q.add(async p => p + 'a')
    q.add(async p => p + 'b')
    const last = await q.add(async p => p + 'c')

    expect(last).toBe('abc')
  })
})
