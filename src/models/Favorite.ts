import { DataTypes, Model } from "sequelize"
import { CourseInstance } from "./Course"
import { UserInstance } from "./User"
import { sequelize } from "../database"

export interface Favorite {
    userId: number, 
    courseId: number
}

//nesse caso, não precisamos de atributos de criação, pois não usamos id

export interface FavoriteInstance extends Model<Favorite>, Favorite {
    course?: CourseInstance, 
    user?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstance>('Favorite', {
    userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      courseId: {
        allowNull: false,
        primaryKey: true, 
        type: DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
})