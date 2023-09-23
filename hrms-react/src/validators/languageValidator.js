
import * as Yup from "yup"


export const languageValidatorSchema = Yup.object().shape({

    name: Yup.string().required("Yabancı dil ismini yazınız"),
    level: Yup.string().required("Dil seviyenizi seçiniz")

})