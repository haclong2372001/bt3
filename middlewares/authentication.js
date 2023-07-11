const readFile = require("../utils/readFile")
const jwt = require("jsonwebtoken")
// => token => verify_token => token nay dung => se cho nguoi ta di qua (neu token sai => thi minh se chan lai)
const authentication = (req,res,next) => {
    const bearerToken = req.headers.authorization

    if(bearerToken){
        return res.status(401).json({message :"chua dang nhap"})
    }
    const token = bearerToken.split(" ")[1]

    const verify_token = jwt.verify(token,process.env.SECRET_KEY)

    if (verify_token){
        return res.status(401).json({message :"Ban Chua dang nhap"})
    }
    const userId = verify_token.userId
    // neu nhu nguoi dung da dang nhap thi dc su dung
    const result = readFile("user.json")
   
    const checkUser = result.find(item => item.userId == userId)

    if(checkUser){
        next()
    }
    return res.status(401).json({message :'Ban chu dang nhap'})
}
module.exports = authentication