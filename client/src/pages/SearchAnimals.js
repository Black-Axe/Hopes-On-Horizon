import React, {useState, useEffect}from 'react'
import Banner from '../components/BannerSearch'
import Search from '../components/Search'
import CardList from '../components/card-list/CardList';
import './animals.scss';
import { Card } from '../components/card/Card';

export default function SearchAnimals() {
  const [animals, setAnimals] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    const [animalFact, setAnimalFact] = useState(null);

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


    useEffect(() => {
      fetchAnimalFact();

    }, []);

    const fetchAnimalFact = async () => {
      fetch('https://se-animal-facts.herokuapp.com/')
      .then(response => response.json())
    .then(response => {

      console.log(response.data)
      setAnimalFact(response.data);

      })
            


    }

    return (
    <>
        <Banner />
        <div className="side-bar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/animals">Animals</a>
                </li>
                <li>
                    <a href="/search">Search</a>
                </li>
            </ul>
          </div>
        <div className="searchContainer">
          
          
          <div className="city-state-fields">
            <h4 className="searchLabel">Search by city and state</h4>
              <input id="cityField" placeholder="city" className="fieldsInput"></input>

              <input id="stateField" placeholder="state" className="fieldsInput"></input>
              <button className="searchButton fieldsInput">Submit</button>
            </div>
            <div className="middle">

            <h5 className="searchLabelBigger">or</h5>
            </div>
          
          <div className="zipcode">
            <h4 className="searchLabel">Search by zip</h4>
            <input placeholder="Zipcode" className="fieldsInput"></input>
            <button className="searchButton fieldsInput">Submit</button>
          </div>
        </div>

      
      <CardList animals={animals} />

    </>
    
    )
}
