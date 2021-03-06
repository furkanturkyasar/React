import axios from "axios"

/*
export default async function getData(user_id) {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
    return console.log(user, posts);
}
*/

const getData = async(user_id) => {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)

    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)

    return {user, posts};
}

export default getData

// Anonim fonksiyon
/*
export default (async (user_id) => {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id)
    return console.log(user, posts);
})(1)
*/ 