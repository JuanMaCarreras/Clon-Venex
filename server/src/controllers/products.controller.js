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
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const searchProducts = async (req, res) => {
    const { name } = req.params

    try {
        const keywords = name.toLowerCase().split(' ')

        const orConditions = keywords.map(keyword => ({
            name: {
                [Op.iLike]: `%${keyword}%`,
            },
        }))

        const query = await Products.findAll({
            where: {
                [Op.or]: orConditions,
            },
        })

        if (!query) {
            return res.status(404).json({ error: `Product not found with name, ${name}` })
        }

        res.status(200).json(query)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


export const getProductsById = async (req, res) => {

    const { id } = req.params

    try {

        console.log('Searching for product with ID:', id)

        const idProduct = await Products.findOne({
            where: {
                id: id
            }
        })

        if (!idProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }
        res.status(200).json(idProduct)



    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }


}