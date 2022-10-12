const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')

let multer = require("multer")


let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname);
    }
})
let upload = multer({ storage: storage }).array("userPhoto", 10)


module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', UserController.index)

 
    app.post('/coffee', CoffeeController.create)
    app.put('/coffee/:coffeeId', CoffeeController.put)
    app.delete('/coffee/:coffeeId', CoffeeController.remove)
    app.get('/coffee/:coffeeId', CoffeeController.show)
    app.get('/coffee', CoffeeController.index)

    app.get('/coffee', CoffeeController.index)

    

    app.post('/upload', function (req, res) {
        upload(req, res, function (err) {

            if (err) {
                return res.end("Error uploading file.")
            }
            res.end("File is uploaded")
        })
    })
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');
            console.log(req.body.filename)
            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
                (err) => {
                    if (err) throw err;
                    res.send("Delete sucessful")

                });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete file the material'
            })
        }

    })

}