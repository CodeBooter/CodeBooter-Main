
const express = require('express');
const { getCertificates, createCertificate, } = require('../controller/certificateController');
//const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");



const router =express.Router();
// jobs route
router.route("/certificates").get( getCertificates);


router.route("/certificate/newcertificate").post(createCertificate);




module.exports = router;