import { Favorite } from "../models"

export const favoriteService = {
    findByUserId: async (userId: number) => {
        const favorites = await Favorite.findAll({
            where: { userId }, 
            attributes: [['user_id', 'userId']],
            include: {
                association: 'Course', 
                attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']]
            }
        });
        const courses = favorites.map((favorite) => favorite.Course)
        return {
            userId, 
            courses
        };

    },

    create: async (userId: number, courseId: number) => {
        const favorite = await Favorite.create({ courseId, userId });
        return favorite;
    }, 

    delete: async (userId: number, courseId: number) => {
        await Favorite.destroy({
            where: {
                courseId, 
                userId
            }
        })
    }, 

    isFavorited: async (userId: number, courseId: number) => {
        const favorite = await Favorite.findOne({ 
            where: {
                userId, 
                courseId
            }
        });
        return favorite !== null;
    }
}