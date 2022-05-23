const customerModel = require('../models/customerModel')

class customerController {
    async addCustomer(req, res) {
        try {
            const customer = new customerModel({
                username: req.body.customerFullname,
                email: req.body.customerEmail,
                mobile: req.body.customerMobile,
                adress: req.body.customerAddress
            })
            await customer.save()
            res.redirect('/admin')
        } catch (e) {
            console.log(e)
        }
    }
    async deleteCustomer(req, res){
        try{
            const username = req.body.deleteCust
            const customer = await customerModel.findOneAndDelete({username: customerF  ullname})
            res.redirec('/admin')
        } catch (e){
            console.log(e)
        }
    }
}