import React, {useState, useEffect}from 'react'
import Banner from '../../components/sections/Banner'
import CardList from '../../components/card-list/CardList';
export default function Animals() {
    const [animals, setAnimals] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/animals')
        .then(response => response.json())
        .then(data => {
            setAnimals(data.animals);
            setPagination(data.pagination);
            setLoading(false);
            console.log(data);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        console.log(animals);
    }, [animals]);

    return (
        <>
        <Banner />
        <CardList animals={animals} />


        </>
    )
}
