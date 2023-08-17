import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";

export const adminJsResources: ResourceWithOptions[] = [
    //dizemos pro AdminJS quais models ele deve gerenciar e as opções para gerenciar cada um deles
    {
        resource: Category, 
        options: categoryResourceOptions
    }, 
    {
        resource: Course,
        options: courseResourceOptions
    }
]

