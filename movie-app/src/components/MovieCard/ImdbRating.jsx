import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import {
  fetchAsyncDetails,
  getDetails,
  removeDetails,
} from '../../features/movies/movieSlice';
import './MovieDetail.scss';

const ImdbRating = ({imdbID}) => {
 
    const dispatch = useDispatch();
    // console.log(imdbID);
    const data = useSelector(getDetails);
  
    useEffect(() => {
      dispatch(fetchAsyncDetails(imdbID));
      return () => {
        dispatch(removeDetails());
      };
    }, [imdbID, dispatch]);

  return (
    <div>ImdbRating</div>
  )
}

export default ImdbRating