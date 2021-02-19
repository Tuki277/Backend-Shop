var data = require('../config/connect')

exports.adminLogin = (req, res, next) => {
    var account = req.body.account
    var password = req.body.password
    data.query('SELECT * FROM admin WHERE account = ? AND password = ? ', [account, password], (err, rows, fields) => {
        if (rows.length > 0 ) {
            res.status(200).json({ success : true })
        }
        else {
            res.status(200).json({ success : false })
        }
    })
}

exports.addCategory = (req, res, next) => {
    var newCategory = req.body.name
    data.query('INSERT INTO danhmuc (name) VALUES (?)', newCategory, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(201).json({ data : rows })
        }
    })
}

exports.getCategory = (req, res, next) => {
    data.query('SELECT * FROM danhmuc', (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(200).json({ rows })
        }
    })
}

exports.deleteCategory = (req, res, next) => {
    var id = req.params.id
    data.query('DELETE FROM danhmuc WHERE category_id = ?', id, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(200).json({ success : true })
        }
    })
}

exports.updateCategory = (req, res, next) => {
    var id = req.params.id
    var name = req.body.name
    data.query('UPDATE danhmuc SET name = ? WHERE category_id = ?', [name, id], (err, rows, fields) => {
        if (err) {
            res.status(404).json({ success : false })
        }
        else {
            res.status(201).json({ success : true })
        }
    })
}

exports.getProducts = (req, res, next) => {
    data.query('SELECT * FROM sanpham', (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(200).json({ rows })
        }
    })
}

exports.addProducts = (req, res, next) => {
    var name = req.body.name
    var image = req.body.image
    var category_id = req.body.category_id
    var detail_product = req.body.detail_product
    var price = req.body.price
    var color = req.body.color
    var quantity = req.body.quantity
    var size = req.body.size
    var brand = req.body.brand
    data.query('INSERT INTO sanpham (name, image, size, category_id, detail_product, price, color, quantity, brand) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [name, image, size, category_id, detail_product, price, color, quantity, brand], (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(201).json({ rows })
        }
    })
}

exports.getProductDetail = (req, res, next) => {
    var id = req.params.id
    data.query('SELECT * FROM sanpham WHERE product_id = ?', id, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        } else {
            res.status(200).json({ rows })
        }
    })
}

exports.deleteProducts = (req, res, next) => {
    var id = req.params.id
    data.query('DELETE FROM sanpham WHERE product_id = ?', id, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ success : false })
        } else {
            res.status(200).json({ rows })
        }
    })
}

exports.editProducts = (req, res, next) => {
    var id = req.params.id
    var name = req.body.name
    var image = req.body.image
    var category_id = req.body.category_id
    var detail_product = req.body.detail_product
    var price = req.body.price
    var color = req.body.color
    var quantity = req.body.quantity
    var size = req.body.size
    data.query('UPDATE sanpham SET name = ?, image = ?, category_id = ?, detail_product = ?, price = ?, color = ?, quantity = ?, size = ? WHERE product_id = ?', 
    [name, image, category_id, detail_product, price, color, quantity, size, id], (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        }
        else {
            res.status(201).json({ rows })
        }
    })
}

exports.getProductById = (req, res, next) => {
    var id = req.params.id
    data.query('SELECT s.* FROM sanpham s, danhmuc d WHERE d.category_id = s.category_id AND d.category_id = ?', id, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ err })
        } else {
            res.status(200).json({ rows })
        }
    })
}