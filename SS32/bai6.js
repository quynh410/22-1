let product = [
    {id: 1, name: 'Iphone12', price: 20000000},
    {id: 2, name: 'Iphone11', price: 10000000},
    {id: 3, name: 'SamSung Note10', price: 500000000},
];

function sapXepGia (product){
    product.sort(function(a,b){
        return a.price - b.price;
    });
}

sapXepGia(product)

console.log(product);
