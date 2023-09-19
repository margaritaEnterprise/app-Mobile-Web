import Loader from "../components/loader.js";

export const renderLoader = (element) => {
    $(element).html(Loader());
}
