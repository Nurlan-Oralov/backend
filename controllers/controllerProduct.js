const modelProduct = require('../models/modelProduct')

class controllerProduct {
    async addProduct(req, res){
        try {
            const product = new modelProduct({
                title: req.body.productTitle,
                img: req.body.productImg
            })
            await product.save();
            res.redirect('/input')
        } catch (e) {
            console.log(e)
        }
    }
    async deleteProduct(req, res){
        try{
            const productTitle = req.body.productDelete
            const product = await modelProduc.findOneAndDelete({title: productTitle})
            res.redirect('/input')
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new controllerProduct()