var express = require('express');
var router = express.Router();
var adminControllers = require('../controllers/admin')

router.post('/login', adminControllers.adminLogin)

router.route('/category')
    .get(adminControllers.getCategory)
    .post(adminControllers.addCategory)

router.route('/category/:id')
    .patch(adminControllers.updateCategory)
    .delete(adminControllers.deleteCategory)

router.route('/products')
    .get(adminControllers.getProducts)
    .post(adminControllers.addProducts)

router.route('/products/:id')
    .get(adminControllers.getProductDetail)
    .delete(adminControllers.deleteProducts)
    .patch(adminControllers.editProducts)

router.route('/cart/products')
    .get(adminControllers.getProductInCart)
    .post(adminControllers.postProductInCart)

router.get('/category/:id/products', adminControllers.getProductById)

module.exports = router