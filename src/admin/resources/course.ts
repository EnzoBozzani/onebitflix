import { ResourceOptions } from "adminjs";

//mesmo esquema do categoryResourceOptions,, porém aqui temos a propriedade de uploadThumbnail, 
//que será vista mais a frente
export const courseResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'categoryId'],
    filterProperties: ['name', 'synopsis', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'featured', 'categoryId'],
    showProperties: ['id', 'name', 'synopsis', 'featured', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt']
}