import express from "express";
import {
    deleteController,
    getController,
    getControllerById,
    postController,
    putController
} from "../controllers/blogsController";
import {
    descriptionBlogValidator,
    idBlogValidator,
    nameBlogValidator,
    websiteUrlValidator
} from "../middlewares/blogsValidators";
import {errorMiddleware} from "../middlewares/errorMiddleware";
import {authMiddleware} from "../middlewares/authMiddleware";
import {getPostsByBlogId, postPostByBlogId} from "../controllers/postsController";


const router = express.Router();

router.route('/')
    .get(getController)
    .post(
        authMiddleware,
        nameBlogValidator,
        descriptionBlogValidator,
        websiteUrlValidator,
        errorMiddleware,
        postController
    );
router.route('/:id')
    .put(
        authMiddleware,
        idBlogValidator,
        nameBlogValidator,
        websiteUrlValidator,
        descriptionBlogValidator,
        errorMiddleware,
        putController
    )
    .delete(
        authMiddleware,
        idBlogValidator,
        errorMiddleware,
        deleteController
    )
    .get(
        idBlogValidator,
        errorMiddleware,
        getControllerById
    );

router.route('/:id/posts')
    .get(
        getPostsByBlogId
    )
    .post(
        authMiddleware,
        nameBlogValidator,
        descriptionBlogValidator,
        websiteUrlValidator,
        errorMiddleware,
        postPostByBlogId
    )


export default router
