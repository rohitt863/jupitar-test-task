import React, { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
// import UserList from "./UserList";
// import Vector from "./Vector.png";
// import { AiOutlineSearch } from "react-icons/ai";
import {
  Container,
  ProductBox,
  ProductImage,
  ProductButton,
  ContentSmall,
  ProductName,
  ProductImageWrapper
} from '../assets/styles';
import { productDetails } from '../typesList'

interface PropsList {
  productList: Array<productDetails>;
  handleAddProduct: (item: any) => void
}

const ProductDetails = (props: PropsList) => {
  const { productList, handleAddProduct } = props

  return (
    <>
      {
        productList.map((item: productDetails) => {
          return (
            <div className="col-3">
              <ProductBox>
                <ProductImageWrapper>
                  <ProductImage
                    src={item.imageUrl}
                    alt="product"
                    className="productImageClass"
                  />
                </ProductImageWrapper>
                <div className="productBoxContent">
                  <ContentSmall>{item.category}</ContentSmall>
                  <ProductName>{item.name}</ProductName>
                  <h2>{`$${item.price}/${item.unitType}`}</h2>
                </div>
                <div>
                  <ProductButton className="productButton" onClick={() => handleAddProduct(item)}> <IoIosAddCircleOutline /> add to cart</ProductButton>
                </div>
              </ProductBox>
            </div>
          )
        })
      }
    </>
  );
};

export default ProductDetails;
