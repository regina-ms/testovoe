import appConstants from "../common/constants";
import { goTo } from "../router";

export default function returnToMain() {
    document.querySelector(".return-to-main").addEventListener("click", () => {
        goTo(appConstants.pathnames.mainPage);
    })
}