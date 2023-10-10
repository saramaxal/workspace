import { API_URL, VACANCY_URL } from "../script.js";
import { validationForm } from "./validationForm.js";

export const formControler = () => {
    const form = document.querySelector(".employer__form");

    const validate = validationForm(form);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const employerError = document.querySelector(".employer__error");
        if (!validate.isValid) return;

        try {
            const formData = new FormData(form);
            employerError.textContent = "ОТПРАВКА. ПОДОЖДИТЕ...";
            const response = await fetch(`${API_URL}${VACANCY_URL}`, {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                employerError.textContent = "";
                window.location.href = 'index.html';
            }
        } catch (error) {
            employerError.textContent = "Не удалось отправить.";
            console.error(error);
        }

    })
}
