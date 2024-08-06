import {blogCollection} from "../db/mongo-db";

export const queryHelper = async (query: { [key: string]: string | undefined }) => {
    const totalCount = await blogCollection.countDocuments()
    const pageSize = query.pageSize ? Math.ceil(totalCount / +query.pageSize) : 10
    return {
        // pageNumber: query.pageNumber ? +query.pageNumber : 1,
        // pageSize: query.pageSize !== undefined ? +query.pageSize : 10,
        // sortBy: query.sortBy ? +query.sortBy : 'createdAt',
        // sortDirection: query.sortDirection === 'asc' ? +query.sortDirection : 'desc',
        // searchNameTerm: query.searchNameTerm ? query.searchNameTerm : null,
        //
        // pagesCount: query.pagesCount ? +query.pagesCount : 1,
        // page: query.page ? Number(query.page) : 1,
        // pageSize: query.pageSize !== undefined ? +query.pageSize : 10,
        // totalCount: query.totalCount ? +query.totalCount : 1,
        //
        totalCount,
        pageSize: query.pageSize !== undefined ? +query.pageSize : 10,
        pagesCount: pageSize,
        page: query.pageNumber ? Number(query.pageNumber) : 1,
        sortBy: query.sortBy ? query.sortBy : 'createdAt',
        sortDirection: query.sortDirection ? query.sortDirection : 'desc',
        searchNameTerm: query.searchNameTerm ? query.searchNameTerm : null,
    }
}
