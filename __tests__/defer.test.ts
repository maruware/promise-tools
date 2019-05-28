/* eslint-env jest */

import { defer } from '../src/defer'
import { delay } from '../src/delay'

describe('defer test', () => {
  it('defer should work to resolve', async () => {
    const d = defer<string>()

    delay(50).then(() => d.resolve('success'))
    const result = await d.promise
    expect(result).toEqual('success')
  })

  it('defer should work to reject', async () => {
    expect.assertions(1)
    const d = defer<string>()

    try {
      delay(50).then(() => d.reject(new Error('failed')))
      await d.promise
    } catch (e) {
      expect(e).toEqual(new Error('failed'))
    }
  })
})
