const { response } = require('express')
const express = require('express')
const connection = require('./database')
const router = new express.Router()

router.get('/', (req, res) => {
    res.send('Ryan Austin Andika - 1303190086, Buka file login.html')
})

router.post('/Register', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, rows, fields) => {
        if (error) {
            res.status(400).json({ msg: "Error :" + error })
        } else {
            res.status(200).json({ msg: "Akun Berhasil Ditambah",status:200, data: rows })
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
        if (error) {
            res.status(400).json({ msg: "Alamat Email Atau Password Salah" })
        } else {
            res.status(200).json({ msg: "Login Berhasil" })
        }
    })
})

module.exports = router