import { NotFoundPage } from '@payloadcms/next/views'
/* @ts-expect-error -- generated file */
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
