import React, { useEffect, useState } from "react";
import CardUI from './ass-1';
import './ass-1.css';

function Ass() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setData(resData);
        };
        fetchMyData();
    }, []);

    return (
        <div className='cards-container'>
            {data.map((dataItem, index) => (
                <CardUI
                    key={index}
                    image={dataItem.image}
                    id={dataItem.id}
                    title={dataItem.title}
                    descr={dataItem.description}
                    price={dataItem.price}
                    cat={dataItem.category}
                    rating={dataItem.rating.rate}
                    count={dataItem.rating.count}
                />
            ))}
        </div>
    );
}

export default Ass;
