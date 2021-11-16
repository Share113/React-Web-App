import express from 'express';
import {getPosts, createPosts, updatePost, deletePost, likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPosts);
//router.get('/:id', getPost);
router.patch('/:_id',auth, updatePost);
router.delete('/:_id',auth, deletePost);
router.patch('/:_id/likePost',auth, likePost);

export default router;