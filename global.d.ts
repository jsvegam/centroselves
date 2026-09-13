import type { Payload } from 'payload'

declare global {
  var payload: {
    client: Payload | null
    promise: Promise<Payload> | null
  }
}

export {}
