'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      thumbnail_url: {
        type: Sequelize.DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      category_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        //indica que é uma referência à tabela categories e a qual campo, que é o id
        references: { model: 'categories', key: 'id' },
        //essas opções dizem o que deve acontecer com a tabela curso de acordo com o que aconteça na tabela 
        //categorias. Ou seja, ao atualizar uma categoria, o curso é atualizado. E não é possível remover uma categoria associada
        //a um curso
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('courses')
  }
};
