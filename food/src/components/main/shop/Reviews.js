import { GET_PRODUCT_REVIEWS } from '../../../graphql/queries';
import Loader from '../../shared/Loader';
import React from 'react';
import Review from './Review';
import { useQuery } from '@apollo/client';

const Reviews = ({slug}) => {
    const {loading, data} = useQuery(GET_PRODUCT_REVIEWS, {
        variables:{
            slug
        }
    });
    if(loading) return <Loader />
    return (
        <div>
        <h2 style={{textAlign: 'right', borderBottom:'1px solid gray', paddingBottom:'15px'}}>نظرات</h2>
        <div>
            
            {
                data.comments.map(comment => 
                    <Review key={comment.id} {...comment}/>
                )
            }
        </div>
        </div>
    );
};

export default Reviews;