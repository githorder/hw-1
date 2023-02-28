export default class Product {
  name;
  price;
  quantity;
  description;

  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  static filterProducts(stringPattern = '', products = []) {
    if (
      !Array.isArray(products) ||
      products.filter((product) => product instanceof Product).length !==
        products.length
    ) {
      return null;
    }

    if (stringPattern.length === 0 || products.length === 0) return products;

    let filteredProducts = products;

    stringPattern.split('&').forEach((filterStr) => {
      let filterProp = filterStr.split('-')[0];

      if (filterProp === 'name' || filterProp === 'description') {
        filterStr = filterStr.split('-');
      } else if (filterProp === 'quantity' || filterProp === 'price') {
        if (
          filterStr.split('-')[1].includes('>=') ||
          filterStr.split('-')[1].includes('<=')
        ) {
          filterStr = [].concat(
            filterStr.split('-')[0],
            filterStr.split('-')[1].slice(0, 2),
            filterStr.split('-')[1].slice(2)
          );
        } else {
          filterStr = [].concat(
            filterStr.split('-')[0],
            filterStr.split('-')[1][0],
            filterStr.split('-')[1].slice(1)
          );
        }
      } else {
        return filteredProducts;
      }

      filteredProducts = filteredProducts.filter((product) => {
        switch (filterStr[1]) {
          case 'contains':
            return product[filterStr[0]]
              .toLowerCase()
              .includes(filterStr[2].toLowerCase());
          case 'starts':
            return product[filterStr[0]]
              .toLowerCase()
              .startsWith(filterStr[2].toLowerCase());
          case 'ends':
            return product[filterStr[0]]
              .toLowerCase()
              .endsWith(filterStr[2].toLowerCase());
          case '=':
            return product[filterStr[0]] === +filterStr[2];
          case '>':
            return product[filterStr[0]] > +filterStr[2];
          case '<':
            return product[filterStr[0]] < +filterStr[2];
          case '>=':
            return product[filterStr[0]] >= +filterStr[2];
          case '<=':
            return product[filterStr[0]] <= +filterStr[2];
          default:
            return false;
        }
      });
    });

    console.log(filteredProducts);
    return filteredProducts;
  }
}
