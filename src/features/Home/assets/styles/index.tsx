import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const ProductBox = styled.div`
  text-align: center;
`;

export const ProductImageWrapper = styled.div`
  border: 1px solid red;
  text-align: center;`
  ;

export const ProductButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-transform: capitalize;
  border: 1px solid #d7d7d7;
  background-color: transparent;
  color: #38c2de;
  font-weight: 600;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const ContentSmall = styled.small`
  font-weight: 600;
  margin-top: 1rem;
  display: block;
  `;

export const ProductName = styled.h3`
    padding: 1rem 0;
  `;

export const ProductImage = styled.img`
  width: 20rem;
  height: 15.4rem;
`;

// -----------------------categories list---------------------------------------------

export const CategoriesBox = styled.div`
  padding-top: 4rem;
`;

export const CategoriesHeading = styled.h4`
  text-transform: capitalize;
  padding-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;
export const CategoriesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoryItem = styled.ul`
  border: 1px solid rgba(215, 215, 215, 0.5);
  padding: 0 1rem;
  border-radius: 2rem;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
`;


export const ItemLink = styled.div`
  text-decoration: none;
  text-transform: capitalize;
  color: #222222;
  font-size: 1rem;
  padding: 0.9rem;
  display: block;
  cursor: pointer;
`;

// .CategoryBoxItemBtn {
//   background-color: transparent;
//   border: none;
//   margin-top: 1rem;
//   margin-left: 0.5rem;
// }
