import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [apiData, setApiData] = useState(null);
    const [showResultsPlaylist, setShowResultsPlaylist] = useState(true);

    const handleSearch = async (query) => {
        setSearchQuery(query);

        fetch(`http://localhost:3000/artists?search=${query}`)
        .then((response) => response.json())
        .then((results) => {
            setApiData(results);
            setShowResultsPlaylist(false);
        })
        .catch((error) => console.log(error));
        
    };

    return(
        <AppContext.Provider value={{ searchQuery, apiData, showResultsPlaylist, setShowResultsPlaylist, handleSearch }}>
            { children }
        </AppContext.Provider>
    );
};