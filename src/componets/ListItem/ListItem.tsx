import React, { useRef } from 'react';

interface ListItemProps {
    movies: string;
    del(id: number): void;
    id: number;
    something: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function someArr<T>(data: Array<T>) {
    return data[0];
};

// const a = someArr([1, 2, 3]);

// console.log(a);
// function red(state: { nr: number }, action: { type: string; payload: number }) {
//     return state;
// }

someArr([1, 2, 3]);

// interface UseStateProps {
//     nr: number
// }

const ListItem: React.FC<ListItemProps> = ({ movies, id, del, something, handleChange }: ListItemProps) => {

    // const [state, setState] = useState<UseStateProps>({ nr: 1 });
    // const [pr, dispatch] = useReducer(red, { nr: 0 });

    const divRef = useRef<HTMLDivElement>(null);
    return (
        <li>{movies}
            <button onClick={() => del(id)} >delete </button>
            <div ref={divRef}></div>
            <input onChange={handleChange} ></input>
        </li>
    );
};

export default ListItem;
