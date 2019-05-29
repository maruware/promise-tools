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

### delay

resolve after milliseconds

```ts
import { delay } from '@maruware/promise-tools'

async function something() {
  await delay(1000)
  // do something
}
```

### timeout

reject after milliseconds

```ts
import { timeout } from '@maruware/promise-tools'

async function something() {
  await timeout(1000)
}
```

### defer

Create deferred object.

```ts
import { defer } from '@maruware/promise-tools'

async function something() {
  const d = defer<string>()

  timeout(50).then(() => d.resolve('success'))
  const result = await d.promise
  // 'success'
}
```
