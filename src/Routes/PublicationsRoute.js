import { Router, response } from "express";

// Enrutador de la API SENA-COOK-PUBLICATION

const router = Router();


// Definimos enpoints

router.get('/', (request, response) =>{ // Recuperar recursos

    response.json(
        {message:'API GET Publications'}
    )

})

router.post('/', (request, response)=>{ // Crear Recursos
    response.json(
        {message:'API POST Publications'}
    )
})


router.put('/:id', (request, response)=>{ // Actualizar un recurso

    const {id} = request.params;
    
    response.json(
        {   
            id:id,
            message:'API PUT Publications'
        }
    )

})

router.patch('/:id', (request, response)=>{ // Actualizar un recurso

    const {id} = request.params;
    
    response.json(
        {   
            id:id,
            message:'API PUT Publications'
        }
    )

})


router.delete('/:id', (request, response)=>{ // Eliminar un recurso

    const {id} = request.params;
    
    response.json(
        {
            id:id,
            message:'API PUT Publications'
        }
    )

})

export default router;