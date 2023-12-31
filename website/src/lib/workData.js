import aicIcon from '../../assets/occupation_icons/aic.png'
import pjIcon from '../../assets/occupation_icons/pj.png'
import ytIcon from '../../assets/social_icons/youtube.png'
import ghIcon from '../../assets/social_icons/github.png'
import chIcon from '../../assets/social_icons/chromewebstore.png'

import aicThumbnail from '../../assets/works/thumbnails/AIC_thumbnail.mp4'
import pjThumbnail from '../../assets/works/thumbnails/PJ_thumbnail.mp4'
import marvinThumbnail from '../../assets/works/thumbnails/marvin_thumbnail.mp4'
import vtThumbnail from '../../assets/works/thumbnails/VT_thumbnail.mp4'
import ttThumbnail from '../../assets/works/thumbnails/TT_thumbnail.mp4'

import aicFallback from '../../assets/works/thumbnails/fallbacks/AIC.png'
import pjFallback from '../../assets/works/thumbnails/fallbacks/PJ.png'
import marvinFallback from '../../assets/works/thumbnails/fallbacks/marvin.png'
import vtFallback from '../../assets/works/thumbnails/fallbacks/VT.png'
import ttFallback from '../../assets/works/thumbnails/fallbacks/TT.png'

export const workData = [
    {
        "title": "AIContentfy",
        "description":"As part of my traineeship at AIContentfy, I implemented various frontend features and backend changes to make the platform's user experience more polished.",
        "time":"June - October 2023",
        "thumbnail": aicThumbnail,
        "fallback": aicFallback,
        "actionUrl": "https://aicontentfy.com/",
        "urlSafe" : "aicontentfy",
        "actionIcon": aicIcon,
        "index":0
    },
    {
        "title": "Programozd a jövőd!",
        "description":"I was the campaign ambassador of an EU project with the goal of making teenagers more interested in programming. I produced online educational content, authored articles, and participated in panel discussions and conferences as part of the program. ",
        "time": "September 2021 - August 2022",
        "thumbnail": pjThumbnail,
        "fallback": pjFallback,
        "actionUrl": "https://www.youtube.com/watch?v=E0sbYyfXweU&list=PL81QBF6Zpc2wpM3Tha00biOWdJ876KQzi",
        "urlSafe" : "programozd-a-jovod",
        "actionIcon": pjIcon,
        "index":1
    },
    {
        "title": "marvin.py",
        "description":"I built an open source, extendable trading bot to daytrade cryptocurrencies. The bot uses WebSocket APIs to handle events instantaneously, and Docker and Google Cloud for deployment.",
        "time": "February 2020 - April 2021",
        "thumbnail": marvinThumbnail,
        "fallback": marvinFallback,
        "actionUrl": "https://github.com/albiDmtr/marvin",
        "urlSafe" : "marvin",
        "actionIcon": ghIcon,
        "index":2
    },
    {
        "title": "Vision Translate",
        "description":"Vision Translate is a browser extension that helps learning a new language by associating words with images as well as making word quizes for you. It is used by over a thousand people.",
        "time": "October - December 2019",
        "thumbnail": vtThumbnail,
        "fallback": vtFallback,
        "actionUrl": "https://chrome.google.com/webstore/detail/vision-translate-smart-hi/aemapjnikiphnefgmocicmlmbdhodkea",
        "urlSafe" : "vision-translate",
        "actionIcon": chIcon,
        "index":3
    },
    {
        "title": "Toothsome Tomato",
        "description":"I made Toothsome Tomato as a small UI design experiment. It is a simple pomodoro timer app, nothing more, nothing less.",
        "time": "September 2021",
        "thumbnail": ttThumbnail,
        "fallback": ttFallback,
        "actionUrl": "https://github.com/albiDmtr/toothsome-tomato",
        "urlSafe" : "toothsome-tomato",
        "actionIcon": ghIcon,
        "index":4
    }
]