var data = require('../config/connect')

exports.adminLogin = (req, res, next) => {
    var account = req.body.account
    var password = req.body.password
    data.query('SELECT * FROM admin WHERE account = ? AND password = ? ', [account, password], (err, rows, fields) => {
        if (rows.length > 0) {
            res.status(200).json({ success: true })
        }
        else {
            res.status(200).json({ success: false })
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
            res.status(201).json({ data: rows })
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
            res.status(200).json({ success: true })
        }
    })
}

exports.updateCategory = (req, res, next) => {
    var id = req.params.id
    var name = req.body.name
    data.query('UPDATE danhmuc SET name = ? WHERE category_id = ?', [name, id], (err, rows, fields) => {
        if (err) {
            res.status(404).json({ success: false })
        }
        else {
            res.status(201).json({ success: true })
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
    var detail = req.body.detail
    var price = req.body.price
    var color = req.body.color
    var quantity = req.body.quantity
    var size = req.body.size
    data.query('INSERT INTO sanpham (name, image, size, detail, price, color, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, image, size, detail, price, color, quantity], (err, rows, fields) => {
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
            res.status(404).json({ success: false })
        } else {
            res.status(200).json({ rows })
        }
    })
}

exports.editProducts = (req, res, next) => {
    var id = req.params.id
    var name = req.body.name
    var image = req.body.image
    var detail = req.body.detail
    var price = req.body.price
    var color = req.body.color
    var quantity = req.body.quantity
    var size = req.body.size
    data.query('UPDATE sanpham SET name = ?, image = ?, detail = ?, price = ?, color = ?, quantity = ?, size = ? WHERE product_id = ?',
        [name, image, detail, price, color, quantity, size, id], (err, rows, fields) => {
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

exports.getProductInCart = (req, res, next) => {
    data.query('SELECT * FROM giohang', (err, rows, field) => {
        if (err) {
            res.status(404).json({ err })
        } else {
            res.status(200).json({ rows })
        }
    })
}

exports.checkout = (req, res, next) => {
    var name = req.body.name
    var address = req.body.address
    var phone = req.body.phone
    var note = req.body.note
    var orders = req.body.orders
    var quantity = req.body.quantity
    var price = req.body.price
    var totalPrice = req.body.totalPrice
    data.query('INSERT INTO giohang (name, address, phone, note, orders, quantity, price, totalPrice ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, address, phone, note, orders, quantity, price, totalPrice], (err, rows, fields) => {
            if (err) {
                res.status(404).json({ err })
            }
            else {
                res.status(201).json({ rows })
            }
        })
}

exports.deleteProductsInCart = (req, res, next) => {
    var id = req.params.id
    data.query('DELETE FROM giohang WHERE cart_id = ?', id, (err, rows, fields) => {
        if (err) {
            res.status(404).json({ success: false })
        } else {
            res.status(200).json({ rows })
        }
    })
}