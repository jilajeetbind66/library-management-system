import express from 'express'
import userVerify from '../middleware/auth.middleware.js';
import isAdmin from '../middleware/RoleChecker.js'
import { add_book,get_books,book_list,search_book,
book_details,delete_book,edit_book,update_book,select_book} from '../controllers/book.controller.js';

const router = express.Router();


router.post('/add-book/',userVerify,isAdmin,add_book);

router.get('/book-list/',userVerify,book_list);

router.get('/search-book/:search',userVerify,isAdmin,search_book);

router.get('/book-details/:id',userVerify,book_details);

router.get('/delete-book/:id',userVerify,isAdmin,delete_book);

router.get('/edit-book/:id',userVerify,isAdmin,edit_book);

router.post('/edit-book/:id',userVerify,isAdmin,update_book);

router.get('/search/',userVerify,isAdmin,select_book);

export default router;