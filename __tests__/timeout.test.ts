/* eslint-env jest */

import { timeout, TimeoutError } from '../src/timeout'

describe('timeout test', () => {
  it('timeout should work', async () => {
    expect.assertions(1)
    try {
      await timeout(100)
    } catch (e) {
      expect(e).toBeInstanceOf(TimeoutError)
    }
  })
})
