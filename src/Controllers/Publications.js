// Importamos el Modelo
import PublicationModel from '../Models/Publications.js';

class PublicationController {
  static async getAll(req, res) {
    try {
      const publications = await PublicationModel.find();
      console.log(publications)
      res.status(200).json(publications);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las publicaciones' });
    }
  }

  static async create(req, res) {
    try {
      const  content  = req.body;
      const nuevaPublicacion = new PublicationModel(content);
      const publicacionGuardada = await nuevaPublicacion.save();

      res.status(201).json(publicacionGuardada);
    } catch (error) {
      res.status(500).json({ message: error.message }); // Manejo de errores
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const updatedPublication = await PublicationModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedPublication);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la publicación' });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedPublication = await PublicationModel.findByIdAndDelete(id);
      res.status(200).json(deletedPublication);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la publicación' });
    }
  }
}



export default PublicationController;
