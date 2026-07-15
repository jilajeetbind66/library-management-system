import multer from 'multer';

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/');
    
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const limits={
    fileSize:1024*1024*10
}


const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/'))
        cb(null,true)

    else
        cb(new Error('Only image are Allowed !'))
}


export default multer({storage,limits,fileFilter,});

