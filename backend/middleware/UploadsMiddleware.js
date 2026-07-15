import multer from 'multer';
import upload from '../config/multer.js'

const ImageUpload=(req,res,next)=>{
 upload.single('image')(req,res,(err)=>{

  if(err instanceof multer.MulterError){
    
    if(err.code==='LIMIT_FILE_SIZE'){

       return res.status(413).json({
        success:false,message:'image size can not more than 2MB'
       })
    }
  }

    

  if(err){
   return res.status(415).json({
        success:false,message:'Only image files are allowed!'
       })
      }


      //  if(!req.file)
      //   return res.status(400).json({
      //   success:false,message:'plaese select an image!'
      //  })


next();

});

};



export default  ImageUpload;