var firebase = require("firebase-admin");

adminemail='satyamg650@gmail.com';
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
var email="akashjaiswalxyz@gmail.com";
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

const nodemailer = require("nodemailer");
const xoauth2 = require('xoauth2');



var transporter = nodemailer.createTransport({
  service: 'gmail',
 
  auth:{
	  xoauth2: xoauth2.createXOAuth2Generator({
		
    user: adminemail,
	clientId: '321479175307-q51r8p5o03879ko41csq6e45c51ljt05.apps.googleusercontent.com',
	clientSecret: '9DLQuWRCZbVT6ADLIpVGpcgs',
	refreshToken: '1/V_TpMkMxTmjTfV8gfoUUD4lq4gYx9lv_Bt2A7fFA_LM'
   
  }
  )
  }
});

var mailOptions = { 
  from: adminemail,
  to: 'satyamg840047@gmail.com',
  subject: 'Welcome message',
  text: 'Dear '+fname+' Welcome to our app.'
};
transporter.sendMail(mailOptions,function(err,res){
	if(err){
		console.log('Error');
	}
	else{
		console.log('Email sent');
	}
})
