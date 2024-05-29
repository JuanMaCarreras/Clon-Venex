import Users from '../models/Users.js'
import { verifyJwtToken } from '../helpers/token.jwt.js'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        if (!token) return res.status(401).json({ message: 'No token provider' })

        const decoded = await verifyToken(token)

        const user = await Users.findByPk(decoded.id)

        if (!user) return res.status(404).json({ message: 'User not found' })

        req.user = user
        console.log(token)
        next()
    } catch (error) {
        res.status(500).json({ error: 'Not authorized' })
    }
}



export const authorizeRole = (requireRoles) => {
    return (req, res, next) => {
        const userRole = req.user.role

        if (!userRole) return res.status(403).json({ message: 'Not authorized' })

        next()
    }
}