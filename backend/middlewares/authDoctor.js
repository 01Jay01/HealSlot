import jwt from 'jsonwebtoken'

const authDoctor = async (req, res, next) => {
    try {
        const {dtoken} = req.headers
        if(!dtoken) {
            return res.json({success: false, message: 'Not Authorized'})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
         //req.user = { id: token_decode.id } 
         req.body = req.body || {}
         req.body.docId = token_decode.id


        next()

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}
export default authDoctor;