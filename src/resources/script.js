const searchInput = document.getElementById('search-input');
const resultsPlaylist = document.getElementById('result-playlists');
const resultsArtist = document.getElementById('result-artist');
const baseUrl = 'http://localhost:3000'

function requestApi(searchTerm) {
    const url = `${baseUrl}/artist?search=${searchTerm}`;

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
        .catch((error) => console.log(error));
}

function displayResults(result) {
    resultsPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
    if (searchTerm === '') {
        resultsPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
})