const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api-artists/artists.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/artists', (req, res) => {
    const searchTerm = req.query.search;
    const artists = router.db.get('artists').value();
    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(searchTerm));
    console.log(filteredArtists);
    res.json(filteredArtists);
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server running on http://localhost:3000');
})