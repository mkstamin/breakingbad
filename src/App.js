import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Charactergrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    const fetchItems = useCallback(async () => {
        setIsLoading(true);
        const res = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
        const result = await res.json();

        setItems(result);
        setIsLoading(false);
    }, [query]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <div className="container">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Charactergrid isLoading={isLoading} items={items} />
        </div>
    );
}

export default App;
