import express from 'express';
import userVerify from '../middleware/auth.middleware.js';
import isAdmin from '../middleware/RoleChecker.js';
import {issue_book,get_issue,fetch_issued,return_book,
dashboard,my_books} from '../controllers/issue.Controller.js'

const router = express.Router();

router.post('/issue-book',userVerify,isAdmin,issue_book);

router.get('/get-issue',userVerify,isAdmin,get_issue);

router.get('/fetch-issued',userVerify,isAdmin, fetch_issued);

router.patch('/return-book/:issueId',userVerify,isAdmin,return_book)

router.get('/dashboard',userVerify,dashboard);

router.get('/my-books',userVerify,my_books);

export default router;