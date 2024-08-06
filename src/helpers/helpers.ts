export const queryHelper = (query: { [key: string]: string | undefined }) => {
    return {
        // pageNumber: query.pageNumber ? +query.pageNumber : 1,
        // pageSize: query.pageSize !== undefined ? +query.pageSize : 10,
        // sortBy: query.sortBy ? +query.sortBy : 'createdAt',
        // sortDirection: query.sortDirection === 'asc' ? +query.sortDirection : 'desc',
        // searchNameTerm: query.searchNameTerm ? query.searchNameTerm : null,
        pagesCount: query.pagesCount ? +query.pagesCount : 1,
        page: query.page ? Number(query.page) : 1,
        pageSize: query.pageSize !== undefined ? +query.pageSize : 10,
        totalCount: query.totalCount ? +query.totalCount : 1,
        searchNameTerm: query.searchNameTerm ? query.searchNameTerm : null,
    }
}
