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
            <h2>상품상세페이지</h2>
            <h3>제품의 이름은 {}입니다.</h3>
            <h3>제품의 이름은 {json[0]}입니다.</h3>
            
        </div>
        
    );
};

export default Detail;