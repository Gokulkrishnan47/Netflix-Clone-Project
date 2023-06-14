import server from "../server";
//to get all list
export const getlist = async () => await server.get("mylist");
//add list
export const addlist = async (cart) => await server.post("mylist", cart);
//delete list
export const deletelist = async (id) => await server.delete(`mylist/${id}`);
