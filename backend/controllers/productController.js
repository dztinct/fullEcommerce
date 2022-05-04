const Product = require('../model/Product')
const upload = require('../config/upload')

exports.createProduct = async (req, res, next) => {
    const ImageFile = upload.single('image')
    ImageFile(req, res, async(err) => {
        try {
            const { file } = req
            if(err){
                throw err
            }
            const data = {
                image : `uploads/products/${file.filename}`,
                description : req.body.description,
                name : req.body.name,
                price : req.body.price,
                category : req.body.category,
            }
            const savedProduct = await Product.create(data)
            res.status('201').json({data : savedProduct})
        } catch (error) {
            console.log(error)
            return next(res.status(403).json(error))
        }
    })
}
