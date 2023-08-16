import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOptions } from "./category";

export const adminJsResources: ResourceWithOptions[] = [
    //dizemos pro AdminJS quais models ele deve gerenciar e as opções para gerenciar cada um deles
    {
        resource: Category, 
        options: categoryResourceOptions
    }
]

