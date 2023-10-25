console.log("Config...");

const env = process.env

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "127.0.0.1"; 
export const SERVER_URL  = `http://${HOST}:${PORT}`;

export default{
    PORT,
    HOST,
    SERVER_URL
}