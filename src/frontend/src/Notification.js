import {notification} from "antd";


export const responseNotification = (type,message, description) =>
    notification[type]({message, description,duration:5});


export const notficationType={
    SUCCESS:"success",
    INFO:"info",
    WARNING:"warning",
    ERROR:"error"};
