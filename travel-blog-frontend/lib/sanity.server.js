import {createClient} from 'next-sanity'
import { config } from './config'

export const sanityClient = createClient(config)

export const previewClient = createClient({
    ...config,
    useCdn:false,
    token: 'sk90QMt45CmfPCIGX8fjw4MuPDG1FQOLc94sfSoythGzo1a44GuHAjoE7gphkLH8ox8rAoE1jxQY6tAr1IR9uJBoyGewN5apUcR0cEIBl8leptaPRj3L9OBpeIu282yrQXenKjQqe4MaV4j2GehBwNxaFMXqVfQDtUILKkC29L9e3k4fD2mR'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient