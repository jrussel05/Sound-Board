const sounds = ['boo1', 'boo2', 'boo3', 'boo4', 'boo5', 'boo6']

sounds.forEach(sounds => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sounds).play()
    })

    document.getElementById('button').
    appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sounds => {
        const song = document.getElementById(sounds)

        song.pause()
        song.currentTime = 0;
    })
    
}