const Curso = require('../models/Curso'); 

// GET -> READ
// req -> pega os dados do input do usuario
// res -> retorna os dados 
exports.getCursos = async(req, res) =>{
    try{
        const cursos = await Curso.find();
        res.json(cursos);
    } catch(error){
        res.status(500).json({ message: error.message});
    }
}

// 400 - client error , 404 - not found
// 500 - internal server error 
exports.getCursosById = async (req, res) =>{
    try{
        const cursos = await Curso.findById(req.params.id); 
        if (!cursos) {
            return res.status(404).json({message: 'Curso não encontrado'}); 
        }
        res.json(cursos); 
    }catch(error){
        res.status(500).json({message:error.message}); 
    }
};
// POST = CREATE 
exports.createCurso = async(req, res) =>{
    const {name, courseLoad, semester}  = req.body; 
    try {
        const curso = new Curso({
            name, 
            courseLoad, 
            semester
        }); 
        await curso.save();
        res.status(201).json(curso);
    } catch(error){
        res.status(400).json({message:error.message}); 
    }
}

//PUT = UPDATE 
exports.updateCurso = async(req,res) =>{
    try{
        const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
        if(!curso){
            return res.status(404).json({message: 'Curso não encontrado'});   
        }
        res.json(curso); 
    }catch(error){
        res.status(400).json({message:error.message}); 
    }
}
// DELETE 
exports.deleteCurso = async(req,res) =>{
    try{
        const curso = await Curso.findByIdAndDelete(req.params.id);
        if(!curso){
            return res.status(404).json({message: 'Curso não encontrado'})
        }
        res.json({message: 'Curso deletado'}); 
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};