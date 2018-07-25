var firebase = require("firebase-admin");

//var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  databaseURL: "https://sampleproject-657b2.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("users");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

var fname1="";var lname1="";var email1="";
var userId="ak45";
var fname="Akash";
var lname="Jaiswal";
var email="akash@jaiswal.com";
writetoUsers(userId,fname,lname,email);

function writetoUsers(userId, fname,lname, email) {
  firebase.database().ref('users/' + userId).set({
    fname: fname,
	lname: lname,
    email: email
    
  });
  fname1=fname;lname1=lname;email1=email;
 }
 var usermail="";
function writetoUserInfo(userId, fname,lname, email) {
  firebase.database().ref('userinformation/' + userId).set({
    fname1: fname,
	lname1: lname,
    email1: email
    
  });
  usermail= "Dear"+ fname+" "+lname+", Welcome to our app";
 }
 writetoUserInfo(userId, fname1,lname1, email1);

/////

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "satyamg650@gmail.com",
       pass: "gmailPassword"
   }
});

smtpTransport.sendMail({  //email options
   from: "Sender Name <satyamg650@gmail>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "Receiver Name <"+email+">", // receiver
   subject: "Emailing with nodemailer", // subject
   text: usermail, // body
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});