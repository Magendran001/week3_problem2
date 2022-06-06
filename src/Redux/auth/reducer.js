
const init = { status: false, token: null, isLoading: false }
const authreducer = (state = init, { type, payload }) => {

    switch (type) {
        case "requestlogin":
            {
                return { ...state, isLoading: true }
            }
        case "successlogin":
            {
                return { ...state, status: true, token: payload.token, email: payload.email, isLoading: false, error: false }
            }
        case "failurelogin":
            {
                return { ...state, status: false, error: true, isLoading: false }
            }
        default:
            {
                return { ...state }
            }
    }

}
export default authreducer