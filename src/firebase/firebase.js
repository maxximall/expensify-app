import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCFt662_TjCamx9uxtieeajHzZCGAgHx3E",
    authDomain: "expensify-fd516.firebaseapp.com",
    databaseURL: "https://expensify-fd516.firebaseio.com",
    projectId: "expensify-fd516",
    storageBucket: "expensify-fd516.appspot.com",
    messagingSenderId: "867622070204"
};

const database = firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default}

// export {googleAuthProvider, firebase as default}

// //child_changed 
// firebase.database().ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //child_removed
// firebase.database().ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //child_added
// firebase.database().ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// firebase.database().ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// });


// firebase.database().ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// });

// setTimeout(()=>{
//     firebase.database().ref('isSingle').set(false)
// },
// 3000);

// firebase.database().ref().set({
//     name: 'Max Karacun',
//     location: 'London',
//     job: {
//         title: 'Front-End Developer',
//         company: 'InvestCloud'
//     },
//     isSingle: false
// //set returns a promise
// }).then(()=>{
//     console.log('data is saved.')
// }).catch((e)=>{
//     console.log(e)
// });

// firebase.database().ref('isSingle').remove().then(()=>{
//     console.log('data has been successfuly removed')
// }).catch((e)=>{
//     console.log('error: ',e)
// })

// firebase.database().ref().update({
//     location: 'Barcelona',
//     'job/title': 'Freelancer'

// })