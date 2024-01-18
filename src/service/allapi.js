

import Category from "../pages/Category";
import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./CommonRequest";


// add video-post request 
// define function for add video

export const addVideo = async (body) => {

    return await commonRequest("POST", `${BASE_URL}/videos`, body)
}

// define function for get video from back end

export const getVideo = async () => {
    return await commonRequest("GET", `${BASE_URL}/videos`, "")
}

// delete video

export const deleteVideo = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/video/${id}`, {})
}

// add category
// define a function for add category

export const addCategory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/categories`, body)
}

// to get Category

export const getAllCategory=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,"")
}

// delete category

export const deleteCategory = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/categories/${id}`, {})
}

// get history

export const getHistory = async () => {
    return await commonRequest("GET", `${BASE_URL}/watchhistory`, "")
}

//  add history

export const addHistory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/watchhistory`, body)
}
// to get single video details
export const getVideos = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/videos/${id}`, "")
}

// to update videos to Category when dragged
// to update dragged details in Category allvideos

export const updateCategory=async (id,body) => {
    return await commonRequest("PUT", `${BASE_URL}/categories/${id}`, body)
}
