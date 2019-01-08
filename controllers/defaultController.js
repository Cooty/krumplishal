exports.index= (req, res) => {
    return res.json({
        gifs: '/gifs',
        gifById: '/gif/:id',
        music: '/music/:lang',
        musicById: '/music/:lang/:id',
        quotes: '/quotes/:lang',
        quoteById: '/quotes/:lang/:id',
        soundfx: '/soundfx/:lang',
        soundfxById: '/soundfx/:lang/:id',
    });
}