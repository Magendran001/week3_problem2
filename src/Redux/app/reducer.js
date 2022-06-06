
const init = { data: [], isLoading: false }
const applicationreducer = (state = init, { type, payload }) => {

    switch (type) {
        case "requestdata":
            {
                return { ...state, isLoading: true }
            }
        case "successdata":
            {
                return { ...state, data: payload, isLoading: false }
            }
        default:
            {
                return { ...state }
            }
    }

}
export default applicationreducer