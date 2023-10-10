import { appData, pagination } from "../script.js";
import { getData } from "./getData.js";
import { renderMoreVacancies } from "./renderMoreVacancy.js";
import { renderError } from "./renderError.js";

export const loadMoreVacancies = (data) => {

    if (pagination.totalPages > pagination.currentPage) {
        const urlWithParams = new URL(appData.lastUrl);
        urlWithParams.searchParams.set('page', pagination.currentPage + 1);
        urlWithParams.searchParams.set('limit', window.innerWidth < 900 ? 6 : 12);
        getData(urlWithParams, renderMoreVacancies, renderError).then(() => { appData.lastUrl = urlWithParams });
    }

    // renderMoreVacancies(lastUrl);
}
