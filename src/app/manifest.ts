import type { MetadataRoute } from 'next';
import { identity } from '../assets/assets';

// web manifest file
// defines appearance on PWAs/TWAs
// defines behavior and appearance in native systems

export default function manifest(): MetadataRoute.Manifest {
    return {

        // branding
        name: identity.name,
        short_name: identity.name,
        description: identity.description,
        id: identity.reference,

        // native behavior
        display: 'fullscreen',
        display_override: ["fullscreen", "minimal-ui", "standalone"],
        background_color: '#1E1B26',
        theme_color: '#1E1B26',

        // search engine optimization
        categories: ["Music", "Media", "Streaming", "Social"],
        orientation: "landscape-primary",

        // crawler
        start_url: '/',
        lang: "En",
        dir: "ltr",

        // icons list
        icons: [
            {
                src: '/icon32.svg',
                sizes: '32x32',
                type: 'image/svg',
            },
            {
                src: '/icon64.svg',
                sizes: '64x64',
                type: 'image/svg',
            },
            {
                src: '/icon128.svg',
                sizes: '128x128',
                type: 'image/svg',
            },
            {
                src: '/icon256.svg',
                sizes: '256x256',
                type: 'image/svg',
            },
        ],
    }
}