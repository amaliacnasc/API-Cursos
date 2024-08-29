// Importanto o mongoose 
const mongoose = require('mongoose'); 

// Criando o schema com as entidades 
const cursoSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    }, 
    courseLoad:{
        type:Number, 
        required: true
    }, 
    semester:{
        type: Number, 
        required: true
    }, },
    {
        // Criando campos createdAT and updatedAT
        timestamps:true
    
}); 
// Dando os 'atributos' do schema a variável curso 
const Curso = mongoose.model ('Curso', cursoSchema); 

// exportando a variável para utilizá-la em outros arquivos
module.exports = Curso; 
