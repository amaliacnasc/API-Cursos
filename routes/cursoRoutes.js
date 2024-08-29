const express = require('express'); 
const {getCursos, getCursosById, createCurso, updateCurso, deleteCurso} = require('../controllers/cursoController');
const router = express.Router(); 

router.route('/').get(getCursos).post(createCurso);
router.route('/:id').get(getCursosById).put(updateCurso).delete(deleteCurso); 

module.exports=router; 