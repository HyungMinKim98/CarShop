import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './CartList.css';

const CartList=()=>{
    const cart = useSelector(state=>state.cart)
    const cartItem = cart.length >= 1 ? cart.map((item,idx)=>{
        return <CartItem key={item.id} item={item} />}):
        <div className="cart-empty">장바구니가 비어 있습니다.</div>

    return(
        <div className="cart-list">
            <h2 className="cart-list-title">장바구니</h2>
            {cartItem}

            <div class="frame">
                <i class="fal fa-money-check fa-lg" ></i>
                <button class="custom-btn btn-12"><span>Click!</span><span>주문하기</span></button>
            </div>
        </div>
        
    );
};

export default CartList