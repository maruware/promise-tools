/* eslint-env jest */

import { timeout } from '../src/timeout'

describe('timeout test', () => {
  it('timeout should work', async () => {
    const t1 = Date.now()
    await timeout(100)
    const t2 = Date.now()
    expect(t2 - t1).toBeGreaterThanOrEqual(100)
  })
})
