import axios from "axios"
const Requestdata = () => {

    return { type: "requestdata" }
}

const Successdata = (payload) => {

    return { type: "successdata", payload }
}

const Postfetchapi = (page) => ({ dispatch }) => {

    dispatch(Requestdata())
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res);
            let lastindex = page * 5;
            let paginationdata = res.data.slice(lastindex, lastindex + 5)
            dispatch(Successdata(paginationdata))
        })
        .catch((err) => { console.log(err) })


}

export { Requestdata, Successdata, Postfetchapi }