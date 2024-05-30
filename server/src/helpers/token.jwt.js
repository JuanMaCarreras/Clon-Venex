import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

const { SECRET } = process.env

export const tokenSign = (user) => {

    return jwt.sign(
        { id: user.id },
        SECRET,
        { expiresIn: '1d' }
    )
}


export const verifyJwtToken = async (token) => {
    return jwt.verify(token, SECRET)

}