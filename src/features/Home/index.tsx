import React, { useEffect, useState } from "react";
import {
  Container
} from './assets/styles';
import { productListDetails } from './constants'
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import { IoMdHand } from "react-icons/io";
import { productDetails } from './typesList'

const Home = () => {
  const [productList, setProductList] = useState<Array<productDetails>>(productListDetails)
  const [productSortedList, setProductSortedList] = useState<Array<productDetails>>(productListDetails)
  const [selectedProductList, setSelectedProductList] = useState<Array<productDetails>>([])

  const [categoriesList, setCategoriesList] = useState<Array<string>>([])

  useEffect(() => {
    const categoryTypeList: Array<string> = []
    productList.map(item => {
      if (item.category && !categoryTypeList.includes(item.category)) {
        categoryTypeList.push(item.category)
      }
    })
    setCategoriesList(categoryTypeList)
  }, [])

  const handlerCategory = (category: string) => {
    if (category) {
      setProductSortedList(productList.filter(item => item.category === category))
    } else {
      setProductSortedList(productList)
    }
  }

  const handleAddProduct = (product: productDetails) => {
    const isPoductExist = selectedProductList.find((item: productDetails) => item.productId.value === product.productId.value)
    if (!isPoductExist) {
      const data = [...selectedProductList]
      data.push(product)
      setSelectedProductList(data)
    }
  }

  return (
    <div>
      <Categories categoriesList={categoriesList} handlerCategory={handlerCategory} />
      <Container>
        <div className="row">
          <ProductDetails productList={productSortedList} handleAddProduct={handleAddProduct} />
        </div>
      </Container>
    </div>
  );
};

export default Home;
