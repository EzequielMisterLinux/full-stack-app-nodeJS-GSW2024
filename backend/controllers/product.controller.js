import productModel from "../models/product.model.js";

const createNewProduct = async (req, res) => {
    
    const {nombre, precio , disponibilidad, imagen} = req.body

    if (!nombre || !precio || !disponibilidad || !imagen) {
        res.status(401).json({
            msj : "todos los atributos de la peticion son requeridos"
        })
    }

    


    try {
        
        let crearProducto = await productModel({nombre, precio , disponibilidad, imagen})

        await crearProducto.save()

        res.status(201).json({mjs: "producto creado exitosamente",crearProducto })


    } catch (error) {
        console.error(error);
        
    }
}

export default createNewProduct