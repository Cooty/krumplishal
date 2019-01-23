exports.index= (req, res) => {
    return res.json({
        gifs: '/gifs',
        gifById: '/gif/:id',
        music: '/music/:lang',
        musicTrackById: '/music-track/:lang/:id',
        quotes: '/quotes/:lang',
        quoteById: '/quote/:lang/:id',
        soundfx: '/soundfxs/:lang',
        soundfxById: '/soundfx/:lang/:id',
    });
}