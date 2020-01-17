import React, { useState, useRef } from 'react';
import LisItem from "../ListItem/ListItem";
import CreateNew from "../CreateNew/CreateNew";

interface I {
    id: number;
    movies: string;
}

const SomeList: React.FC = () => {

    const someRef = useRef<HTMLUListElement>(null);

    const [elements, setElements] = useState<I[]>([{ id: 1, movies: "Some movie" }, { id: 2, movies: "Some other" }]);

    const add = (elem: string) => {
        // setElements([...elements, { id: elements.length + 1, movies: elem }]);
        setElements(old => {
            return [...old, { id: elements.length + 1, movies: elem }];
        })
    };

    const del = (id: number) => {
        // setElements(elem => {
        //     return elem.filter(item => item.id !== id);
        // });
        let index = -1;
        elements.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        setElements((elements) => {
            const newOnes = [...elements];
            newOnes.splice(index, 1);
            return newOnes;
        });
    }

    return (
        <>
            <ul ref={someRef} >
                {elements.map(item => <LisItem handleChange={e => { console.log(e) }} something="a" id={item.id} del={del} key={item.id} movies={item.movies} />)}
            </ul>
            <CreateNew add={add} />
        </>
    );
}

export default SomeList;