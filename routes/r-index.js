
module.exports = (app) => {
    app.use('/', require("./r-home"))
    app.use('/about', require("./r-about"))
    app.use('/contact', require("./r-contact"))
    app.use('/register', require("./r-register"))
    app.use('/login', require("./r-login"))
}
