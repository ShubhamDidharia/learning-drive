const jwt = require('jsonwebtoken');

function auth(req, res, next){

    const token = req.cookies.token;

    if(!token){
        res.render('login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user=decoded;
        
    } catch (error) {
        return res.status(401).json({
            message:'unauthorised access'
        })
        
    }
}

module.exports=auth;
