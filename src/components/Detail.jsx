import React, { useReducer } from 'react';
import { json, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const Detail = () => {    
    let params =useParams();
    const paramsId = Number(params.id)
    const detailItem = useSelector((state)=>state.product.value)
    const clickItem = detailItem.filter(item=>item.id===paramsId)
    console.log(clickItem)
    console.log('파라미터 아이디',params.id)
    return (   
        <div className='container'>
            <blockquote class="aqua">
                <h2><span class="Caqua">Car Name</span> - {clickItem[0].product_name}</h2>  
                <h2><span class="Caqua">Price</span> - {clickItem[0].price} 만원 </h2>  
                <h2><span class="Caqua">Distance</span> - {clickItem[0].distance}km</h2>  
                <h2><span class="Caqua">Electric_expenses</span> - {clickItem[0].electric_expenses}km/kWh</h2>  
                <h2><span class="Caqua">Battery_capacity</span> - {clickItem[0].battery_capacity}kWh</h2>  
            </blockquote>

        </div>
        
    );
};

export default Detail;