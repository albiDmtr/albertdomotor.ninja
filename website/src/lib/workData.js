import aicThumbnail from '../../assets/works/thumbnails/AIC_thumbnail.mp4'
import pjThumbnail from '../../assets/works/thumbnails/PJ_thumbnail.mp4'
import marvinThumbnail from '../../assets/works/thumbnails/marvin_thumbnail.mp4'
import vtThumbnail from '../../assets/works/thumbnails/VT_thumbnail.mp4'
import xsvThumbnail from '../../assets/works/thumbnails/XSV_thumbnail.mp4'
import ttThumbnail from '../../assets/works/thumbnails/TT_thumbnail.mp4'
import ddtThumbnail from '../../assets/works/thumbnails/DDT_thumbnail.mp4'

import aicFallback from '../../assets/works/thumbnails/fallbacks/AIC.png'
import pjFallback from '../../assets/works/thumbnails/fallbacks/PJ.png'
import marvinFallback from '../../assets/works/thumbnails/fallbacks/marvin.png'
import vtFallback from '../../assets/works/thumbnails/fallbacks/VT.png'
import xsvFallback from '../../assets/works/thumbnails/fallbacks/XSV.png'
import ttFallback from '../../assets/works/thumbnails/fallbacks/TT.png'
import ddtFallback from '../../assets/works/thumbnails/fallbacks/DDT.png'

import aicIcon from '../../assets/work_icons/aic.png'
import xsvIcon from '../../assets/work_icons/xsv.png'
import pjIcon from '../../assets/work_icons/pj.png'
import marvinIcon from '../../assets/work_icons/marvin.png'
import vtIcon from '../../assets/work_icons/vt.png'
import ttIcon from '../../assets/work_icons/tt.png'
import ddtIcon from '../../assets/work_icons/ddt.png'

export const workData = [
    {
        "title": "TwinTorsion",
        "description":"As part of my traineeship at AIContentfy, I implemented various frontend features and backend changes to make the platform's user experience more polished.",
        "time":"July - December 2024",
        "thumbnail": ttThumbnail,
        "fallback": ttFallback,
        "icon": ttIcon,
        "actionUrl": "https://twintorsion.aalto.fi/",
        "urlSafe" : "twintorsion",
        "index":0
    },
    {
        "title": "AIContentfy",
        "description":"As part of my traineeship at AIContentfy, I implemented various frontend features and backend changes to make the platform's user experience more polished.",
        "time":"June - October 2023",
        "thumbnail": aicThumbnail,
        "fallback": aicFallback,
        "icon": aicIcon,
        "actionUrl": "https://aicontentfy.com/",
        "urlSafe" : "aicontentfy",
        "index":1
    },
    {
        "title": "XSValley",
        "description":"I'm responsible for the website and visual identity of XSValley, an Aaltoes project that aims to connect university students with startups in Silicon Valley. I built their website and designed their logo and other visual elements.",
        "time":"March 2024",
        "thumbnail": xsvThumbnail,
        "fallback": xsvFallback,
        "icon": xsvIcon,
        "actionUrl": "https://aicontentfy.com/",
        "urlSafe" : "xsvalley",
        "index":2
    },
    {
        "title": "DDT Lab",
        "description":"As part of my traineeship at AIContentfy, I implemented various frontend features and backend changes to make the platform's user experience more polished.",
        "time":"December 2024 - January 2025",
        "thumbnail": ddtThumbnail,
        "fallback": ddtFallback,
        "icon": ddtIcon,
        "actionUrl": "https://ddtlab.aalto.fi/",
        "urlSafe" : "ddt-lab",
        "index":3
    },
    {
        "title": "Programozd a jövőd!",
        "description":"I was the campaign ambassador of an EU project with the goal of making teenagers more interested in programming. I produced online educational content, authored articles, and participated in panel discussions and conferences as part of the program. ",
        "time": "September 2021 - August 2022",
        "thumbnail": pjThumbnail,
        "fallback": pjFallback,
        "icon": pjIcon,
        "actionUrl": "https://www.youtube.com/watch?v=E0sbYyfXweU&list=PL81QBF6Zpc2wpM3Tha00biOWdJ876KQzi",
        "urlSafe" : "programozd-a-jovod",
        "index":4
    },
    {
        "title": "marvin.py",
        "description":"I built an open source, extendable trading bot to daytrade cryptocurrencies. The bot uses WebSocket APIs to handle events instantaneously, and Docker and Google Cloud for deployment.",
        "time": "February 2020 - April 2021",
        "thumbnail": marvinThumbnail,
        "fallback": marvinFallback,
        "icon": marvinIcon,
        "actionUrl": "https://github.com/albiDmtr/marvin",
        "urlSafe" : "marvin",
        "index":5
    },
    {
        "title": "Vision Translate",
        "description":"Vision Translate is a browser extension that helps learning a new language by associating words with images as well as making word quizes for you. It is used by over a thousand people.",
        "time": "October - December 2019",
        "thumbnail": vtThumbnail,
        "fallback": vtFallback,
        "icon": vtIcon,
        "actionUrl": "https://chrome.google.com/webstore/detail/vision-translate-smart-hi/aemapjnikiphnefgmocicmlmbdhodkea",
        "urlSafe" : "vision-translate",
        "index":6
    }
]