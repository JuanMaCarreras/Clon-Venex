export const getProducts = (req, res) => {
    res.send('Get all pruducts')
}

export const createProducts = (req, res) => {
    console.log(req.body)
    res.send('Product Create')
}
