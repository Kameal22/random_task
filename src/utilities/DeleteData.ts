import axios from "axios";

export const deleteData = async ( id: string) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      }).then(res => console.log(res))
};