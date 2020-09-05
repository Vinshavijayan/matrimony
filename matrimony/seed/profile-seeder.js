var Profile = require('../models/profile');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wedding',{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to database..'))

.catch(err => console.log('refuse to connect..',err));


var profile = [

new Profile({
    image: '/images/d.jpeg',
    name: 'Krishna Kishor',
    age: '21',
    gender: 'Female'
}),
new Profile({
    image: '/images/.jpeg',
    name: 'Christeena',
    age: '25',
    gender: 'Female'
}),
new Profile({
    image: '/images/q.jpeg',
    name: 'Aleena',
    age: '23',
    gender: 'Female'
}),

new Profile({
    image: '/images/f.jpeg',
    name: 'Alexa',
    age: '22',
    gender: 'Female'
}),
new Profile({
    image: '/images/a.png',
    name:'Karthika',
    age: '24',
    gender: 'Female'
}),
new Profile({
    image: '/images/e.jpeg',
    name: 'Shefi',
    age: '26',
    gender: 'Female'
})

] ;

var done = 0;
for(var i=0; i< profile.length; i++) {
    profile[i].save(function(err,result) {
        done++;
        if (done === profile.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}