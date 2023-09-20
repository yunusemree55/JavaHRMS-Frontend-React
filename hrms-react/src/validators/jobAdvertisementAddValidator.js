
import * as Yup from "yup"

const string = Yup.string()

export const jobAdvertisementAddValidatorSchema = Yup.object().shape({
    description: string.required("Açıklama alanını doldurunuz"),
    numberOfPosition: string.required("Açık pozisyon sayısı alanını doldurunuz"),
    endingDate:Yup.date().required("Bitiş tarihini seçiniz"),
    cityId:string.required("Şehir alanını seçiniz"),
    jobPositionId:string.required("İş pozisyonu alanını seçiniz")
})