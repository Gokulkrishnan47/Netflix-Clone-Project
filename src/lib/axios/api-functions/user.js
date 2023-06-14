import server from "../server";
//getusers
export const getuser = async () => await server.get("/users");
//userdetails
export const userdetails = async (user) => await server.post("/users", user);
//userlogout
export const userlogout = async () => await server.delete("/users/1");
