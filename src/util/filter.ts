import ProductType from 'types/product-type';

export const sortByPriceAscending = (products: ProductType[]) => {
  if (products)
    return products.sort((a, b) => a.price - b.price);
  else return products
};
export const sortByPriceDescending = (products: ProductType[]) => {
  if (products)
    return products.sort((a, b) => b.price - a.price);
  else return products
};
