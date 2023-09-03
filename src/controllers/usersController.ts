import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
    watching: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id;
        try {
            const keepWatchingList = await userService.getKeepWatchingList(userId);
            return res.json(keepWatchingList);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}