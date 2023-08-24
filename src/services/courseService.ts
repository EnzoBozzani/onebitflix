import { Op } from "sequelize";
import { Course } from "../models";

export const courseService = {
    findByIdWithEpisodes: async (id: string) => {
        const courseWithEpisodes = await Course.findByPk(id, {
            attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']], 
            include: {
                association: 'episodes', 
                attributes: ['id', 'name', 'synopsis', 'order', ['video_url', 'videoUrl'], ['seconds_long', 'secondsLong']],
                order: [['order', 'ASC']], 
                separate: true
            }
        })
        return courseWithEpisodes;
    }, 
    getRandomFeaturedCourses: async () => {
        const featuredCourses = await Course.findAll({
            attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']], 
            where: {
                featured: true, 
            }
        });
        const randomFeaturedCourses = featuredCourses.sort(() => 0.5 - Math.random());
        return randomFeaturedCourses.slice(0, 3);
    }, 

    getTopTenNewest: async () => {
        const newestCourses = await Course.findAll({
            attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']], 
            limit: 10, 
            order: [['created_at', 'DESC']]
        })
        return newestCourses;
    }, 

    findByName: async (name: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage;

        const { count, rows } = await Course.findAndCountAll({
            attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']], 
            where: {
                //utilizaremos o operador do SQL: like, que busca
                //strings que se assemelhem ao resultado
                name: {
                    //usaremos ainda o operador iLike (só tem no Postgres)
                    //fazendo com que ele não diferencie maiúsculas de 
                    //minúsculas. A % antes e depois da palavra indica
                    //que queremos achar name em qualquer lugar da string
                    [Op.iLike]: `%${name}%`
                }
            }, 
            //implementamos a páginação
            limit: perPage, 
            offset
        })
        return {
            courses: rows, 
            page, 
            perPage, 
            total: count
        };
    }
}