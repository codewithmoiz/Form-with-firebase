import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsjIMIPfb5bqdQPIQUei0tgNPGudT8zhI",
  authDomain: "login-signup-25051.firebaseapp.com",
  projectId: "login-signup-25051",
  storageBucket: "login-signup-25051.appspot.com",
  messagingSenderId: "1078096699842",
  appId: "1:1078096699842:web:3f1b8a469fc249b24a765b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', (event) => {
//   function createUser() {
//     let createEmail = document.querySelector('#create-email').value;
//     let createPassword = document.querySelector('#create-password').value;

//     createUserWithEmailAndPassword(auth, createEmail, createPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   }

//   var createBtn = document.querySelector('#create-btn');
//   if (createBtn) {
//     createBtn.addEventListener('click', createUser);
//   } else {
//     console.error('Create button not found');
//   }
});




document.addEventListener('DOMContentLoaded', (event) => {
function loginUser(e){
  e.preventDefault();
  let loginEmail = document.querySelector('#login-email').value;
  let loginPassword = document.querySelector('#login-password').value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    Swal.fire({
      title: "Yoohoooo!",
      text: `The user ${user.email} has been logged in successfully`,
      icon: "success"
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
      icon: "error",
      title: errorCode,
      text: errorMessage,
    });
    console.log(errorCode, errorMessage);
  });
}

  var loginBtn = document.querySelector('#login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', loginUser);
  } else {
    console.error('Login button not found');
  }

});