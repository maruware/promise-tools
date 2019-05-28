/* eslint-env jest */

import { delay } from '../src/delay'

describe('delay test', () => {
  it('delay should work', async () => {
    const t1 = Date.now()
    await delay(100)
    const t2 = Date.now()
    expect(t2 - t1).toBeGreaterThanOrEqual(100)
  })
})
