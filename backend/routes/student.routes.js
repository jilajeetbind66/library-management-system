import express from 'express'
import {add_student,get_students,
search_students,delete_student,
edit_student_details,update_student,
view_student,searchStudent,profile} 
from '../controllers/student.Controller.js'
import userVerify from '../middleware/auth.middleware.js'

import ImageUpload from '../middleware/UploadsMiddleware.js'
const router = express.Router();

router.post('/add-student/',ImageUpload,add_student);

router.get('/get-students/',get_students);

router.get('/search-students/:search',search_students);

router.get('/delete-student/:id',delete_student);

router.get('/edit-student/:id',edit_student_details);

router.post('/edit-student/:id',ImageUpload,update_student);

router.get('/view-student/:id',view_student);

router.get('/search',searchStudent);

router.get('/profile',userVerify,profile);

export default router;