import React from 'react';
import "./ProductItem.css";
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cart/cartSlice';
import { useNavigate ,Link} from 'react-router-dom';

const ProductItem = ({item}) => {
    console.log(item)
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const goToDetail = () =>{
        navigate(`/product/${item.id} `)
    }

    return (
        <div className="product-item">
            <div class="hover15 column">
            <div>
                <figure>           
                    <Link to={item.url}>
                    <img 
                    src={item.product_img}
                    alt="product"
                    className='item-image' />
                    </Link>
                </figure>
            </div>
            </div>

            <div className="item-name" onClick={goToDetail}>{item.product_name}</div>
            <div className="item-price">{item.price} 만원</div>
            <button className='add-cart-btn' onClick={()=>dispatch(addCart(item))}>
                <i className="fas fa-plus"></i>
                장바구니에 담기
            </button>
        </div>
    );
};

export default ProductItem;