const Mongoose = require('mongoose');

const newSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /[\w\d\.]+(@)[\w]+.\w{2,4}.\w{2,3}/.test(v)
            },
            message: props => `${props.value} is not a valid email address`
        },
        required: [true, 'Email is required'],
        unique: true
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v)
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, 'Phone number is required'],
        unique: true,
        maxlength: 10,
        minlength: 10
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    genre: {
        type: String,
        enum: ['MASCULINE', 'FEMENINE', 'NON-BINARY'],
        required: true
    },
    hobby: {
        type: String,
        required: false
    }
}, {
    timestamps: { 
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
});

const User = Mongoose.model('User', newSchema);
module.exports = User;