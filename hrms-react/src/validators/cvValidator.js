
import * as Yup from "yup"

export const cvAddValidationSchema = Yup.object().shape({
    description: Yup.string().required("Açıklama alanı boş bırakılamaz").min(30,"Açıklama alanı en az 30 karakter içermelidir")
})