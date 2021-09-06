import React, {useState, useEffect}from 'react'
import Banner from '../../components/sections/Banner'
import CardList from '../../components/card-list/CardList';
import { Pagination } from '@material-ui/lab';
import ReactPaginate from 'react-paginate';

export default function Animals() {
    const [animals, setAnimals] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const handlePageClick = (pageSelection) => {
        console.log(pageSelection);
        let pageSelected = pageSelection.selected + 1;
        console.log(pageSelected);
        fetch(`http://localhost:5000/animals?page=${pageSelected}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAnimals(data.animals);
        })
        .catch(err => {
            setError(err);
        })

    }
    useEffect(() => {
        if(!animals) {
        fetch('https://shelter-se.herokuapp.com/animals')
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

    }

    }, []);

    useEffect(() => {
        console.log("animals");
        console.log(animals);
        console.log("pagination");
        
        console.log(pagination);
        //console.log(pagination.total_pages);
    }, [animals]);

    return (
        <>
        <Banner />
        <CardList animals={animals} />
        
        <div className="pagination-imagination">
        <ReactPaginate 
            pageCount={pagination ? pagination.total_pages ? pagination.total_pages : 1 : 1}
            marginPagesDisplayed={5}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            activeClassName="activeCurrentPage"
        />

        </div>

        </>
    )
}
