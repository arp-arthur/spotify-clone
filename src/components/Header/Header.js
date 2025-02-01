import React, { useContext, useState } from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import search from '../../assets/icons/search.png';
import { AppContext } from "../../context/AppContext";


const Header = () => {

    const { handleSearch, setShowResultsPlaylist } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');    

    const handleKeyUp = (event) => {
        const value = event.target.value;
        if (value === '') {
            setShowResultsPlaylist(true);
            setInputValue(value);
            return;         
        }
        setInputValue(value);
        handleSearch(value.toLowerCase());
    };
    
    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={ smallLeft } alt="Seta para a esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={ smallRight } alt="Seta para a direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={ search } alt="" />
                <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" onChange={handleKeyUp} value={inputValue} />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;