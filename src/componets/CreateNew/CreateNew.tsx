//useReducer -> in useReducer you need to define what types of state you have and what kind of action do you accept

import React, { useRef, useReducer } from 'react';
interface CreateaNewProps {
    // add: (elem: string) => void;
    add(elem: string): void;
}

interface Red {
    type: string;
    payload: number;
}

const CreateaNew: React.FC<CreateaNewProps> = ({ add }: CreateaNewProps) => {

    const textRef = useRef<HTMLInputElement>(null);

    function reducer(state: { nr: number }, action: Red) {
        switch (action.type) {
            case "PLUS":
                return { nr: state.nr + 1 }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { nr: 0 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const inputData = textRef.current!.value;
        add(inputData);
        textRef.current!.value = "";
    };

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="add" >Add</label><br />
                    <input ref={textRef} type="text" id="add" />
                    <input onChange={change} />
                </div>
                <input type="submit" value="add" />
                <div>{state.nr}</div>
            </form>

            <button onClick={() => dispatch({ type: "PLUS", payload: 1 })}>
                +
            </button>
        </>
    );
};

export default CreateaNew;
