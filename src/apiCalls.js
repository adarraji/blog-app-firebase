import { userRequest, publicRequest } from "./requestMethods";

// User
export const addUser = async (user) => {
    try {
        const res = await publicRequest.post("/auth/register", user);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

// Posts
export const getPosts = async () => {
    try {
        const res = await publicRequest.get("/posts");
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const getPostsByCategory = async (cat) => {
    try {
        const res = await publicRequest.get(`/posts?cat=${cat}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}


export const getPost = async (id) => {
    try {
        const res = await publicRequest.get(`/posts/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = async (id) => {
    try {
        const res = await userRequest.delete(`/posts/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = async (id, data) => {
    try {
        const res = await userRequest.put(`/posts/${id}`, data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export const addPost = async (data) => {
    try {
        const res = await userRequest.post("/posts", data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}