var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest : './public/uploads' }).single('image')

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
    .post(upload, adminControllers.addProducts)

router.route('/products/:id')
    .get(adminControllers.getProductDetail)
    .delete(adminControllers.deleteProducts)

router.route('/products/:id/edit')
    .put(adminControllers.editProducts)

router.route('/cart/products')
    .get(adminControllers.getProductInCart)
    .post(adminControllers.checkout)

router.route('/cart/products/:id')
    .delete(adminControllers.deleteProductsInCart)

router.get('/category/:id/products', adminControllers.getProductById)

module.exports = router