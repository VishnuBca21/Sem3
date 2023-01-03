import jwt from 'jsonwebtoken'

const auth=async(req,res,next)=>{
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send({message:'Access Denide no token provide'})
    try {
        const decoded=jwt.verify(token,"iamvishnu");
        req.user = decoded
        next();
    } catch (error) {
        res.send({message:"invalid token"})
    }
}

export default auth