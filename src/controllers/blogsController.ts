import {Request, Response} from 'express';
import {ObjectId} from "mongodb";
import {blogsRepository} from "../repositories/blogsRepository";
import {queryHelper} from "../helpers/helpers";


export const getController = async (req: Request<any, any, any, any>, res: Response) => {
    const query = await queryHelper(req.query)
    // const blogs = await blogsRepository.getAllBlogsWithQuery(req.query.SearchNameTerm)
    const blogs = await blogsRepository.getAllBlogs(query)
    // Promise<Omit<BlogPaginanorModel, 'items'>>
    // const queryResponse: Omit<BlogPaginatorModel, 'items'> = {
    //     page: req.query.page,
    //     pagesCount: req.query.pagesCount,
    //     pageSize: req.query.pageSize,
    //     totalCount: req.query.totalCount
    // }

    res.status(200).json({...blogs})
}

export const getControllerById = async (req: Request, res: Response) => {
    const blogId = new ObjectId(req.params.id)
    const blog = await blogsRepository.findBlogForRender(blogId)
    res.status(200).json(blog)
}

export const postController = async (req: Request, res: Response) => {
    try {
        const newBlog = await blogsRepository.create(req.body)
        const newBlogMap = await blogsRepository.blogMapForRender(newBlog)
        res.status(201).json(newBlogMap)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const putController = async (req: Request, res: Response) => {
    try {
        const blogId = new ObjectId(req.params.id)
        await blogsRepository.updateBlogById(blogId, req.body)
        res.status(204).send('Обновлено')
    } catch (e) {
        res.status(500).send(e)
    }
}

export const deleteController = async (req: Request, res: Response) => {
    try {
        const blogId = new ObjectId(req.params.id)
        await blogsRepository.deleteBlog(blogId)
        res.status(204).send('Удалено');
    } catch (e) {
        res.status(500).send(e)
    }

}

