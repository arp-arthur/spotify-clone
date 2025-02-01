import React, { useContext } from "react";
import './Main.css';
import Card from "../Card/Card";
import { AppContext } from "../../context/AppContext";

const imageContext = require.context('../../assets/playlist', false, /\.(png|jpeg)$/);

const PlayList = () => {

    

    const { showResultsPlaylist, apiData } = useContext(AppContext);

    const playList = [
        {title: 'Boas festas', url: '1.jpeg'},
        {title: 'Feitos pra você', url: '2.png'},
        {title: 'Lançamentos', url: '3.jpeg'},
        {title: 'Creators', url: '4.jpeg'},
        {title: 'Para treinar', url: '5.jpeg'},
        {title: 'Podcasts', url: '6.jpeg'},
        {title: 'Sertanejo',  url: '7.jpeg'},
        {title: 'Samba e pagode', url: '8.jpeg'},
        {title: 'Funk', url: '9.jpeg'},
        {title: 'MPB', url: '10.jpeg'},
        {title: 'Rock', url: '11.jpeg'},
        {title: 'Hip Hop', url: '12.jpeg'},
        {title: 'Indie', url: '13.jpeg'},
        {title: 'Relax', url: '14.jpeg'},
        {title: 'Música latina', url: '15.jpeg'}

    ];

    return(
        <div className="playlist-container">
            {showResultsPlaylist ? (
                <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                    <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            { playList.map((element, index) => {
                                const imgUrl = imageContext(`./${element.url}`);
                                return(
                                    <Card 
                                        key={index+1}
                                        imgUrl={imgUrl}
                                        title={element.title}
                                        link={'#'}
                                        cardClass={`cards card${index+1}`}
                                    />
                                )
                            })}
                        </section>
                    </div>
                    </div>
            </div>
            ) : (
            <div id="result-artist">
                <h2 className="topResults-title">Top Results</h2>
                <div className="grid-container">
                    
                    {apiData.map((data) => (
                        <div className="artist-card" id="">
                            <div className="card-img">
                                <img alt="" id="artist-img" className="artist-img" src={data.urlImg} />                                
                            </div>
                            <div className="downSide">                                    
                                <div className="card-text">
                                    <a title={apiData.name} className="object-name" href="#">
                                        <span className="artist-name" id="artist-name">{data.name}</span>
                                    </a>
                                    <div className="genre">
                                        <span className="artist-category">{data.genre}</span>
                                    </div>
                                </div>
                                <div className="play">
                                    <button className="playButton">
                                        <span className="svgSpan">
                                            <svg data-encore-id="icon" width="30" height="30" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 bneLcE e-9541-icon" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>)}
            
            
        </div>
    )
};

export default PlayList;