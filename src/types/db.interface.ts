import {BlogDBTypeResponse} from "./db.response.interface";

export interface BlogDBType {
    name: string;
    description: string;
    websiteUrl: string;
}

export interface PostDBType {
    title: string;
    shortDescription: string;
    content: string;
    blogId: string;
}

export interface BlogPaginatorModel {
    pagesCount?: number;
    page?: number;
    pageSize?: number;
    totalCount?: number;
    searchNameTerm?: string;
    items: BlogDBTypeResponse[];
}
