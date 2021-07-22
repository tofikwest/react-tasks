import styled from "styled-components";

export const ProductListItemStyled = styled.li`
  width: 100%;
  padding: 10px;
  height: auto;
  .productListItemWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 3px solid ${(props) => props.colors.darkColors.secondary};
    border-radius: 14px;
    padding: 20px;
  }
  .productListItemTitle {
    text-align: center;
  }
  .productListItemImg {
    height: 200px;
    object-fit: contain;
    margin-top: 20px;
  }
  .productListItemSale {
    margin-top: 20px;
  }
  .productListItemDescription {
    margin-top: 20px;
  }
  .productListColor {
    display: flex;
  }
  .productListItemColor {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  .productListItemPrice {
    margin-top: 20px;
    flex-grow: 1;
  }
  .productListItemButtonGroup {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .productListItemButtonGroup button {
    background-color: ${(props) => props.colors.darkColors.main};
    width: 100%;
    border: none;
    height: 30px;
    /* padding: 10px; */
    color: ${(props) => props.colors.darkColors.buttonText};
    text-transform: uppercase;
    cursor: pointer;
    &:first-child {
      margin-right: 2px;
    }
    &:hover {
      background-color: ${(props) => props.colors.darkColors.active};
    }
  }
  .addToCartBtn {
    align-self: center;
    border-radius: 14px 0 0 14px;
  }
  .detailsBtn {
    border-radius: 0 14px 14px 0;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;
