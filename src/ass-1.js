import React from 'react';
import PropTypes from 'prop-types';
import './ass-1.css';
import Btn from './ass-2';
function CardUI({ image, title, id, descr, price, cat, rating, count }) {
    return (
        <div className='cards-container'>
            <div className='card'>
                <img src={image} alt='pic' className='card-image' />
                <div className='card-details'>
                    <h3>{title}</h3>
                    <h6>Id: {id}</h6> 
                    <label>Description</label>
                    <p>{descr}</p>
                    <p><b>Price:</b> ${price}</p>
                    <h5>Category</h5>
                    <p>{cat}</p>
                    <p><b>Rating:</b> {rating}</p>
                    <p><b>Count:</b>{count}</p>
                    <div>
                        <Btn />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

CardUI.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    descr: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    cat: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardUI;
