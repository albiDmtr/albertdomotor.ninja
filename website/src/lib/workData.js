import aicIcon from '../../assets/occupation_icons/aic.png'
import ytIcon from '../../assets/social_icons/youtube.png'
import ghIcon from '../../assets/social_icons/github.png'
import chIcon from '../../assets/social_icons/chromewebstore.png'

import aicThumbnail from '../../assets/works/thumbnails/AIC_thumbnail.gif'
import pjThumbnail from '../../assets/works/thumbnails/PJ_thumbnail.gif'
import marvinThumbnail from '../../assets/works/thumbnails/marvin_thumbnail.gif'
import vtThumbnail from '../../assets/works/thumbnails/VT_thumbnail.gif'
import ttThumbnail from '../../assets/works/thumbnails/TT_thumbnail.gif'

export const workData = [
    {
        "title": "AIContentfy",
        "description":"As part of my traineeship at AIContentfy, I implemented various frontend features and backend changes to make the platform's user experience more polished.",
        "time":"June - October 2023",
        "thumbnail": aicThumbnail,
        "actionUrl": "https://aicontentfy.com/",
        "actionIcon": aicIcon,
        "index":0
    },
    {
        "title": "Programozd a jövőd!",
        "description":"I was the campaign ambassador of an EU project with the goal of making teenagers more interested in programming. I produced online educational content, authored articles, and participated in panel discussions and conferences as part of the program. ",
        "time": "September 2021 - August 2022",
        "thumbnail": pjThumbnail,
        "actionUrl": "https://www.youtube.com/watch?v=E0sbYyfXweU&list=PL81QBF6Zpc2wpM3Tha00biOWdJ876KQzi",
        "actionIcon": ytIcon,
        "index":1
    },
    {
        "title": "marvin.py",
        "description":"I built an open source, extendable trading bot to daytrade cryptocurrencies. The bot uses WebSocket APIs to handle events instantaneously, and Docker and Google Cloud for deployment.",
        "time": "February 2020 - April 2021",
        "thumbnail": marvinThumbnail,
        "actionUrl": "https://github.com/albiDmtr/marvin",
        "actionIcon": ghIcon,
        "index":2
    },
    {
        "title": "Vision Translate",
        "description":"Vision Translate is a browser extension that helps learning a new language by associating words with images and as well as making word quizes for you. It is used by over a thousand people.",
        "time": "October - December 2019",
        "thumbnail": vtThumbnail,
        "actionUrl": "https://chrome.google.com/webstore/detail/vision-translate-smart-hi/aemapjnikiphnefgmocicmlmbdhodkea",
        "actionIcon": chIcon,
        "index":3
    },
    {
        "title": "Toothsome Tomato",
        "description":"I made Toothsome Tomato as a small UI design experiment. It is a simple pomodoro timer app, nothing more, nothing less.",
        "time": "September 2021",
        "thumbnail": ttThumbnail,
        "actionUrl": "https://github.com/albiDmtr/toothsome-tomato",
        "actionIcon": ghIcon,
        "index":4
    }
]