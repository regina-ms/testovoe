import appConstants from "../common/constants";
import { goTo } from "../router";

export default function closeModal() {
    document.querySelector(".close").addEventListener("click", () => {
        localStorage.clear();
        goTo(appConstants.pathnames.mainPage)
    })
}