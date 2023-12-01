import Products from '../models/Products.js'
import { Op } from 'sequelize'

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.findAll()

        res.status(200).json(allProducts)
    } catch (error) {
        console.log('Error al obtener productos:', error)
        res.status(500).json({ error: 'Products not found' })
    }
}

export const createProducts = async (req, res) => {
    try {
        const {
            name,
            price,
            img,
            description,
            category,
            brand,
            stock,
            availability,
        } = req.body

        console.log('Datos de la solicitud:', req.body)

        const addProducts = await Products.create({
            name,
            price,
            img,
            description,
            category,
            brand,
            stock,
            availability,
        })

        res.status(201).json(addProducts)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
}

export const searchProducts = async (req, res) => {
    const { name } = req.params

    try {
        console.log(req.params)
        const keywords = name.toLowerCase().split(' ')

        // Crear una condición OR para cada palabra clave
        const orConditions = keywords.map(keyword => ({
            name: {
                [Op.iLike]: `%${keyword}%`,
            },
        }))

        // Realizar la búsqueda con condiciones OR
        const query = await Products.findAll({
            where: {
                [Op.or]: orConditions,
            },
        })

        if (query.length === 0) {
            return res
                .status(404)
                .json({ error: `Product not found with name, ${name}` })
        }

        res.status(200).json(query)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
