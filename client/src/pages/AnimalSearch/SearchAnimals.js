import React, {useState, useEffect}from 'react'
import Banner from '../../components/sections/BannerSearch'
import CardList from '../../components/card-list/CardList';
import './animals.scss';
import Slider from "@material-ui/core/Slider";
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Footer from '../../components/sections/Footer';
import ReactPaginate from 'react-paginate';



export default function SearchAnimals() {
  const [animals, setAnimals] = useState(null);

    const [error, setError] = useState(null);
    const [zip, setZip] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [pagination, setPagination] = useState(null);

    const [distance, setDistance] = useState(50);

    function parseQuery(queryString) {
      var query = {};
      var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
      for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
  }

    const handlePageClick = pageSelection => {
      //(pageSelection);
      let pageSelected = pageSelection.selected + 1;
      //console.log(pageSelected);
      //console.log(pagination);
    //  console.log(pagination._links.next.href);
      //console.log(parseQuery(pagination._links.next.href));
      let query = parseQuery(pagination._links.next.href);
      let location = query.location;

      if(!location) {
        location = "";
        fetch(`http://localhost:5000/animals?page=${pageSelected}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setAnimals(data.animals);
            setPagination(data.pagination);
        })
        .catch(err => {
            setError(err);
        })

        return;



      }
      let urlPageChange = `http://localhost:5000/search/location/${distance}?location=${location}&page=${pageSelected}`

      fetch(urlPageChange)
      .then(response => response.json())
      .then(data => {
       // console.log(data);
        setAnimals(data.animals);
        setPagination(data.pagination);
      })
      .catch(error => {
       // console.log(error);
        setError(error);
      });


    //  console.log(distance);
     // console.log(urlPageChange);

      

    }

    const handleSliderChange = (event, newValue) => {
        setDistance(newValue);
      };

      const handleInputChange = (event) => {
        setDistance(event.target.value === '' ? '' : Number(event.target.value));
      };

      const handleBlur = () => {
        if (distance < 1) {
            setDistance(1);
        } else if (distance > 100) {
            setDistance(100);
        }
      };

    useEffect(() => {
      if(!animals){

        fetch('https://shelter-se.herokuapp.com/animals')
        .then(response => response.json())
        .then(data => {
            setAnimals(data.animals);
            setPagination(data.pagination);
            setError(false);
            //console.log(data);
        })
        .catch(error => {
            setError(error);
        })
      }

    }, []);

    useEffect(() => {
        //console.log(distance);
    }, [distance]);


    

    const handleStateChange =  (event) => {

        //console.log(event.target.value);
        setState(event.target.value);

    }
    const handleCityChange =  (event) => {

        //console.log(event.target.value);
        setCity(event.target.value);

    }

    const handleSearchStateCity = async (event) => {
        if(!state || !city){
            alert('Please enter a state and city');
            return;
        }
      //  console.log(state);
      //  console.log(city);

        //http://localhost:5000/search/location/10?state=NY&city=Albany
        const urlWithState = `https://shelter-se.herokuapp.com/search/location/${distance}?state=${state}&city=${city}`;

        fetch(urlWithState)
        .then(response => response.json())
        .then(data => {
          if(data.status === 'error'){
            setAnimals(null);
            setError("Invalid search parameters");
            return;
          }
            setAnimals(data.animals);
            setPagination(data.pagination);
            setError(false);
           // console.log(data);
           // console.log('success');
        })
        .catch(error => {
            setError(error);
        })


    }

    const handleZipChange = (event) => {
      setZip(event.target.value);
     // console.log(zip);
    }

    const handleSearchZip = async (event) => {
        if(!zip){
            alert('Please enter a zip code');
            return;
        }
        //console.log(zip);
        fetch(`https://shelter-se.herokuapp.com/search/location/${distance}?zipcode=${zip}`)
        .then(response => response.json())
        .then(data => {
          //console.log(data);
            setAnimals(data.animals);
            setPagination(data.pagination);
            setError(false);
            //console.log(data);
        })
        .catch(error => {
            setError(error);
        })


    }

    return (
    <>
        <Banner />
        <div className="side-bar">
            <ul>
                <li>
                    <a href="/"><span className="side-bar-menu-text">Home</span></a>
                </li>
                <li>
                    <a href="/animals"><span className="side-bar-menu-text"> Animals</span></a>
                </li>
                <li>
                    <a href="/search"><span className="side-bar-menu-text">Search</span></a>
                </li>
            </ul>
          </div>
        <div className="searchContainer">
          
          
          <div className="city-state-fields">
            <h4 className="searchLabel">Search by city and state</h4>
              <input id="cityField" placeholder="city" className="fieldsInput" onChange={handleCityChange} ></input>

              <select name="state" className="fieldsInput" onChange={handleStateChange}  >
        <option value="AL">AL</option>
        <option value="AK">AK</option>
        <option value="AZ">AZ</option>
        <option value="AR">AR</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="CT">CT</option>
        <option value="DE">DE</option>
        <option value="DC">DC</option>
        <option value="FL">FL</option>
        <option value="GA">GA</option>
        <option value="HI">HI</option>
        <option value="ID">ID</option>
        <option value="IL">IL</option>
        <option value="IN">IN</option>
        <option value="IA">IA</option>
        <option value="KS">KS</option>
        <option value="KY">KY</option>
        <option value="LA">LA</option>
        <option value="ME">ME</option>
        <option value="MD">MD</option>
        <option value="MA">MA</option>
        <option value="MI">MI</option>
        <option value="MN">MN</option>
        <option value="MS">MS</option>
        <option value="MO">MO</option>
        <option value="MT">MT</option>
        <option value="NE">NE</option>
        <option value="NV">NV</option>
        <option value="NH">NH</option>
        <option value="NJ">NJ</option>
        <option value="NM">NM</option>
        <option value="NY">NY</option>
        <option value="NC">NC</option>
        <option value="ND">ND</option>
        <option value="OH">OH</option>
        <option value="OK">OK</option>
        <option value="OR">OR</option>
        <option value="PA">PA</option>
        <option value="RI">RI</option>
        <option value="SC">SC</option>
        <option value="SD">SD</option>
        <option value="TN">TN</option>
        <option value="TX">TX</option>
        <option value="UT">UT</option>
        <option value="VT">VT</option>
        <option value="VA">VA</option>
        <option value="WA">WA</option>
        <option value="WV">WV</option>
        <option value="WI">WI</option>
        <option value="WY">WY</option>
    </select>
              <button className="searchButton fieldsInput" onClick={handleSearchStateCity}>Submit</button>
              
            </div>
            <div className="middle">

            <h5 className="searchLabelBigger">or</h5>
            </div>
          
          <div className="zipcode">
            <h4 className="searchLabel">Search by zip</h4>
            <input placeholder="Zipcode" className="fieldsInput" onChange={handleZipChange}></input>
            <button className="searchButton fieldsInput" onClick={handleSearchZip}>Submit</button>
          </div>

         <div>  

         <Grid container spacing={2} alignItems="center">
        <Grid item>
          Distance
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof distance === 'number' ? distance : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={1}
          />
        </Grid>
        <Grid item>
          <Input
            className={"slider"}
            value={distance}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 1,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
         </div>
        </div>

      {error ? <div className="error-div">{error}</div> : <CardList animals={animals} /> }
     
     
      <div className="pagination-imagination">
      <ReactPaginate 
            pageCount={pagination ? pagination.total_pages ? pagination.total_pages : 1 : 1}
            marginPagesDisplayed={5}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            activeClassName="activeCurrentPage"
        />

      </div>

      <Footer />
      


    </>
    
    )
}
