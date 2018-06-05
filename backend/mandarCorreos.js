

/*
  * File Name : Server.js
  * Task : Run Server and fetch multiple emails from DB to send reminder
  * Invoke all the email task at once and update DB once the email is sent 
 */

/*
 * Load all the required modules 
*/

let async = require("async");
let http = require("http");
let nodemailer = require("nodemailer");
// This will store emails needed to send.
// We can fetch it from DB (MySQL,Mongo) and store here.
let listaCorreos ;
let asuntoCorreo ;
let contenidoCorreo;
// Will store email sent successfully.
let success_email = [];
// Will store email whose sending is failed. 
let failure_email = [];

let transporter;

/* Loading modules done. */

function parametrosCorreo(correos,asunto,contenido) {
    listaCorreos = correos;
    asuntoCorreo = asunto;
    contenidoCorreo = contenido;

    new massMailer();
}

function massMailer() {
    let self = this;

    transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "sistemapracticantes@gmail.com",
            pass: "tecno1971"
        }
    });
    // Fetch all the emails from database and push it in listofemails
    // Will do it later.
    self.invokeOperation();
}

/* Invoking email sending operation at once */

massMailer.prototype.invokeOperation = function() {
    let self = this;
    async.each(listaCorreos,self.SendEmail,function(){
        console.log(success_email);
        console.log(failure_email);
    });
};

/* 
* This function will be called by multiple instance.
* Each instance will contain one email ID
* After successfull email operation, it will be pushed in failed or success array.
*/

massMailer.prototype.SendEmail = function(Email,callback) {
    console.log("Sending email to " + Email);
    let self = this;
    self.status = false;
    // waterfall will go one after another
    // So first email will be sent
    // Callback will jump us to next function
    // in that we will update DB
    // Once done that instance is done.
    // Once every instance is done final callback will be called.
    async.waterfall([
        function(callback) {
        console.log(asuntoCorreo + ' ' + contenidoCorreo)
            let mailOptions = {
                from: 'shahid@codeforgeek.com',
                to: Email,
                subject: asuntoCorreo,
                text: contenidoCorreo
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if(error) {
                    console.log(error);
                    failure_email.push(Email);
                } else {
                    self.status = true;
                    success_email.push(Email);
                }
                callback(null,self.status,Email);
            });
        },
        function(statusCode,Email,callback) {
            console.log("Will update DB here for " + Email + "With " + statusCode);
            callback();
        }
    ],function(){
        //When everything is done return back to caller.
        callback();
    });
};

module.exports = parametrosCorreo;

