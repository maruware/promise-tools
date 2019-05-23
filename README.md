# promise-tools

A collection of tools for Promise.

## Install

```sh
$ yarn add @maruware/promise-tools
```

## Usage

### all

Promise.all shorthand

```ts
import { all } from '@maruware/promise-tools'

async function something() {
  await all(
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  )
}

```

### chain

small queue

```ts
import { chain } from '@maruware/promise-tools'

const sample = (msg: string) => {
  return new Promise<string>(resolve => setTimeout(() => resolve(msg), 10))
}

const errorLogger = (err: Error) => {
  console.error(err)
}

async function something() {
  const q = chain('', errorLogger)
  q.add(prev => sample(prev + 'a'))
  q.add(prev => sample(prev + 'b'))
  const last = await q.add(prev => sample(prev + 'c'))
  // 'abc'
}
```

### timeout

wait milliseconds

```ts
import { timeout } from '@maruware/promise-tools'

async function something() {
  await timeout(1000)
  // do something
}
```
