import React from 'react'
import { Card } from '../card/Card';
import './card-list.styles.css';


export default function CardList(props) {
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
        <div className='card-list'>
            {dummyData.map((item, index) => (
                <Card key={index} name={item.name} age={item.age} />
            ))}


            
        </div>
    )
}
