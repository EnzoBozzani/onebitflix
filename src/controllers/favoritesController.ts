import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favoriteService";

export const favoritesController = {
    save: async (req: AuthenticatedRequest, res: Response) => {
        //obtemos o id diretamente do token decodificado na requisição
        //usamos o ! quando temos certeza que a propriedade sempre existirá
        const userId = req.user!.id;
        const { courseId } = req.body;
        try {   
            const favorite = await favoriteService.create(userId, Number(courseId));
            return res.status(201).json(favorite);
        } catch(err){
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }

    }
}