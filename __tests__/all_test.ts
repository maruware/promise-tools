/* eslint-env jest */

import { all } from '../src/all'

describe('all test', () => {
  it('all should work', async () => {
    const r = await all(
      Promise.resolve('a'),
      Promise.resolve('b'),
      Promise.resolve('c')
    )
    expect(r).toEqual(['a', 'b', 'c'])
  })
})
