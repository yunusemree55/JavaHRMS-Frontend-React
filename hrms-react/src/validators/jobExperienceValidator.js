
import * as Yup from "yup"

export const jobExperienceValidationSchema = Yup.object().shape({
    companyName: Yup.string().required("Şirket adı alanı boş bırakılamaz"),
    position: Yup.string().required("Pozisyon alanı boş bırakılamaz"),
    entranceDate: Yup.date().required("Giriş tarihi boş bırakılamaz")
})