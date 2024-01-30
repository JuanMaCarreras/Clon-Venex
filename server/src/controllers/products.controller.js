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
    try {

        const { id } = req.params

        console.log(req.params)
        console.log('Searching for product with ID:', id)

        const productID = await Products.findByPk(id)

        if (!productID) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.status(201).json(productID)



    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }


}


export const getCategory = async (req, res) => {

    const { category } = req.params

    try {


        if (!category) {
            res.status(404).json({ error: 'Category not found' })
        }

        const filteredCategory = await Products.findAll({
            where: {
                category,
            }
        })

        res.status(200).json(filteredCategory)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }



}