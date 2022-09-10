import axios from "axios";

export const postData = async (URL: string, data: string, title: string, body: string, id: number | undefined) => {
    await axios.post(`${URL}${data}`, {
        title: title,
        body: body,
        id: id
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err)
    })
};