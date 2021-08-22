import React from 'react'
import { Card } from '../card/Card';
import './card-list.styles.css';


export default function CardList({animals}) {
    const dummyData = [
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
        {'name': 'joe', 'age': '20'},
        {'name': 'george', 'age': '22'},
        {'name': 'jane', 'age': '21'},
    ];

    return (


        animals ?
        (<>
        <div className='card-list'>
            {animals.map((animal, index) => (
                <Card key={index} animal={animal} />
            ))}

        </div>
        </>)
        :
        (<div></div>)
    )
}
