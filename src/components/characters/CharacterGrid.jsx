import React from 'react';
import Spinner from '../ui/Spinner';
import Characteritem from './CharacterItem';

const Charactergrid = ({ isLoading, items }) =>
    isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <Characteritem key={item.char_id} item={item} />
            ))}
        </section>
    );

export default Charactergrid;
