

const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    certificateID: {
        type: String,
        required: [true, 'Please enter certificateID'],
        trim: true,
        maxlength: [16, 'certificateID cannot exceed 16 characters'],
        unique: true,
        default: generateCertificateID

    },

    
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: false,
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    certificateLink:{
        type: String,
        required: [true, 'Please enter certificate url'],
        trim: false,
        maxlength: [100, 'certificate urls cannot exceed 100 characters']
    },

    title: {
        type: String,
        required: [true, 'Please enter certificate title'],
        trim: false,
        maxlength: [30, 'certificate title cannot exceed 30 characters']
    },
    // Rest of the fields...
    createdAt: {
        type: Date,
        default: Date.now
    }
});

function generateCertificateID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let certificateID = '';
    for (let i = 0; i < 17; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        certificateID += characters[randomIndex];
    }
    return certificateID;
}

module.exports = mongoose.model('certificate', certificateSchema);
