var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    name: {type: String, required: true},
    dateofbirth: {type:Date, required: true},
    gender: {type: String, required: true},
    religion: {type: String, required: true},
    education: {type: String, required: true},
    location: {type: String, required: true},
    occupation: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    mobile: {type: Number, required: true}
    /*image: {data:Buffer,contentType:String, required: true}*/
});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null);
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User',userSchema);