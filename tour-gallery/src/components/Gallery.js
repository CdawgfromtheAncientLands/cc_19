import React, {useState, useEffect} from "react";
import {useGlobalContext} from "../context/global-context";

//Data fetcher with error and loading handling
const fetchTours = async (setTours, setLoading, setError) => {
  try {
    const response = await fetch("/react-tours-project"); //Proxy setup for CORS
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    setTours(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

//Defining exportables
const Gallery = () => {
  const { state, dispatch } = useGlobalContext(); 

  //Tour data state
  const [tours, setTours] = useState([]);
  
  //State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Fetch tours data on component mount
  useEffect(() => {
    fetchTours(setTours, setLoading, setError);
  }, []);

  //Filter out removed tours
  useEffect(() => {
    if (tours.length > 0) {
      setTours(tours.filter(tour => !state.removedTours.includes(tour.id)));
    }
  }, [tours, state.removedTours]);

  //Function for removing tours from view
  const removeTour = (id) => {
    dispatch({type: "REMOVE_TOUR", payload: id});
    setTours(tours.filter(tour => tour.id !== id));
  };

  //Toggle info visibility
  const toggleReadMore = (id) => {
    setTours(tours.map(tour => tour.id === id ? {...tour, showMore: !tour.showMore} : tour));
  };

  //Render loading and error states
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  //Render when no tours are available
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={() => window.location.reload(false)}>Refresh</button>
      </div>
    );
  }

  //Tour rendering
  return (
    <section>
      {tours.map((tour) => {
        const { id, name, info, image, price, showMore } = tour;
        return (
          <article key={id} className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {showMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => toggleReadMore(id)}>
                  {showMore ? "Show Less" : "Read More"}
                </button>
              </p>
              <button className="delete-btn" onClick={() => removeTour(id)}>
                Not Interested
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Gallery;