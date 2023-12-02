class ProductManager {
    constructor () {
        this.products = []

    }
    getProducts(){
        return this.products
    }
    addProduct(product) {
        if (!product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock)
            {
                return 'faltan llenar campos del producto'
            }

            const result = this.products.find(prod => prod.code === product.code)
            if (result){
                return 'existe el producto con ese codigo'
            }

            if(this.products.length === 0){
                product.id = 1
                return this.products.push(product)
            }
             
            product.id = this.products.length + 1
            this.products.push(product)
            
    }
}

const products = new ProductManager()
console.log (products.getProducts())
console.log (products.addProduct({title : 'prod1', description: 'producto', price:'109', thumbnail: 'imagen', stock: 10, code: 'abc123'}))