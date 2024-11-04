import productModel from "../models/product.model"

const DeleteProduct = async (req, res) => {
    
    const {id} = req.res

    if (!id) {
        res.status(401).json({
            msj : "el id para eliminar el producto es requerido"
        })
    }

    try {

        const borrando = await productModel.findByIdAndDelete(id)

        res.status(200).json({
            msj : "producto borrado exitosamente", borrando
        })

        
    } catch (error) {
        res.status(500).json({
            msj: "hubo un problema al borrar el producto"
        })
    }
}

export default DeleteProduct