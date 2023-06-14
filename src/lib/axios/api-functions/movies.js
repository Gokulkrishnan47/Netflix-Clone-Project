import server from "../server";

export const getAllMovies = async (id) => await server.get(`/movies/${id}`);
//get movies
export const getMovies = async (URL) => await server.get(`/${URL}`);
//treandingnow
export const treandingMovies = async () => await server.get("/trendingnow");
//upcomming
export const upcommingMovies = async () => await server.get("/upcoming");
//toprated
export const topratedMovies = async () => await server.get("/toprated");
//popular
export const popularMovies = async () => await server.get("/popular");
//watch
export const watchmovie = async (data) => await server.post("/watch", data);

//chnage like
export const updateMovies = async ({ id, fetchUrl, ...body }) => {
  await server.put(`/${fetchUrl}/${id}`, body);
};
