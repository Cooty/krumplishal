exports.index= (req, res) => {
    return res.json({
        get: {
            gifs: '/gif/list',
            gifById: '/gif/:id',
            music: '/music/:lang/list',
            musicById: '/music/:lang/:id',
            quotes: '/quote/:lang/list',
            quoteById: '/quote/:lang/:id',
            soundfx: '/soundfx/:lang/list',
            soundfxById: '/soundfx/:lang/:id',
        }
    });
}