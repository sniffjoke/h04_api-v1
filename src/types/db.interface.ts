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

export interface BlogPaginanorModel {
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: BlogDBTypeResponse[];
}
