// @ts-nocheck
import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'
import config from '@/payload.config'

const NotFound = () =>
  NotFoundPage({
    config,
    importMap,
    params: Promise.resolve({ segments: ['not-found'] }),
    searchParams: Promise.resolve({}),
  })

export default NotFound
