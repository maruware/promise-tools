/* eslint-env jest */

import { chain } from '../src/chain'

describe('chain test', () => {
  it('chain should work', async () => {
    const sample = (msg: string) => {
      return new Promise<string>(resolve => setTimeout(() => resolve(msg), 10))
    }
    const q = chain('')
    q.add(p => sample(p + 'a'))
    q.add(p => sample(p + 'b'))
    const last = await q.add(p => sample(p + 'c'))

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
