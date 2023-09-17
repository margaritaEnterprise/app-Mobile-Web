import Loader from "../components/loader.js";

export const renderLoader = async (element) => {
    element.innerHTML = Loader();
}
