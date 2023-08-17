import { Category } from "./Category";
import { Course } from "./Course";

//aqui realizamos a associação entre os cursos e as categorias, indicando que é uma associação ManyToMany
Category.hasMany(Course);
Course.belongsTo(Category)

export { 
    Category, 
    Course
}