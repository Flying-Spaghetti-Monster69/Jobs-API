const { string } = require('joi')
const moongose = require('mongoose')

const jobSchema = new moongose.Schema({
    company:{
        type:string,
        required:[true, 'please provide company name'],
        maxlenght:69
    },

    position:{
        type:string,
        required:[true, 'please provide company name'],
        maxlenght:420
    },

    status:{
        type:string,
        enum:['interview','declined','pending']
    }
})