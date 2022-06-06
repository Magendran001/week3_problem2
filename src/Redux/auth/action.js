import axios from "axios"
const RequestLogin = () => {

    return { type: "requestlogin" }
}

const Successlogin = (payload) => {

    return { type: "successlogin", payload }
}

const Failurelogin = () => {
    return { type: "failurelogin" }
}

const PostLogin = (loginobj, nav) => ({ dispatch }) => {


    dispatch(RequestLogin())
    console.log(loginobj)

    axios.post("https://reqres.in/api/login", { ...loginobj })
        .then((res) => {
            console.log(res);


            if (res.data.token) {
                dispatch(Successlogin({ token: res.data.token, email: loginobj.email }))
                console.log(res.data.token);
                nav("/posts")
            }

        })
        .catch((err) => {
            console.log(err);
            dispatch(Failurelogin())
            alert("wrong  invalid credentials")
        })


}

export { RequestLogin, Successlogin, PostLogin, Failurelogin }