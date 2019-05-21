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

  it('catchCallback should work', async () => {
    const cb = jest.fn()
    const q = chain('', cb)
    q.add(async () => 'a')
    q.add(() => Promise.reject(new Error('failed')))
    await q.add(async () => 'b')

    expect(cb.mock.calls.length).toBe(1)
    const e = cb.mock.calls[0][0] as Error
    expect(e.message).toBe('failed')
  })
})
