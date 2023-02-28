const twitterCount = 10100
const youtubeCount = 14000
const facebookCount = 8000

const twitterEl = document.getElementById('twitter-counter')
const youtubeEl = document.getElementById('youtube-counter')
const facebookEl = document.getElementById('facebook-counter')



function incrementTwitter(count) {
    let startCount = parseInt(twitterEl.textContent)
    startCount += 101
    twitterEl.textContent = startCount
    if (startCount === count) {
        clearInterval(twitter)
    }
}

function incrementYoutube(count) {
    let startCount = parseInt(youtubeEl.textContent)
    startCount += 140
    youtubeEl.textContent = startCount
    if (startCount === count) {
        clearInterval(youtube)
    }
}

function incrementFacebook(count) {
    let startCount = parseInt(facebookEl.textContent)
    startCount += 80
    facebookEl.textContent = startCount
    if (count === startCount) {
        clearInterval(facebook)
    }
}

let twitter = setInterval(function () {
    incrementTwitter(twitterCount)
}, 20)

let youtube = setInterval(function () {
    incrementYoutube(youtubeCount)
}, 20)

let facebook = setInterval(function () {
    incrementFacebook(facebookCount)
}, 20)