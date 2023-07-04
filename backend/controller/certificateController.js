const Certificate = require('../models/certificateModels');

// Create Certificate and save to database
exports.createCertificate = async (req, res) => {
    try {
        const newCertificate = await Certificate.create(req.body);
        newCertificate.save()
        .then(newCertificateSchema => {
            res.status(201).json({
                status: 'success',
                data: {
                    Certificate: newCertificateSchema
                }
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};


// Get all Certificates
exports.getCertificates= async (req, res) => {
    const Certificates = await Certificate.find();

    res.status(200).json({
        
            Certificates
        
    });

};

