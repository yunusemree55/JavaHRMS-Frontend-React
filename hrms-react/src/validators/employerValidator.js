import * as Yup from "yup";

export const employerRegisterValidationSchema = Yup.object().shape({
  companyName: Yup.string()
    .required("Şirket adı alanı boş bırakılamaz")
    .min(3, "Şirket adı en az 3 karakter içermelidir"),
  email: Yup.string()
    .required("Email alanı boş bırakılamaz")
    .matches(
      "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$",
      "Email regex ile doğrulanamadı"
    ),
  webSite: Yup.string()
    .required("Web site alanı boş bırakılamaz")
    .matches(
      "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]",
      "Websitenizi https://www.xxxxx.com şeklinde giriniz"
    ),
  phoneNumber: Yup.string()
    .required("Telefon alanı boş bırakılamaz")
    .min(11, "Telefon alanı 12 haneli olmalıdır")
    .max(11, "Telefon alanı 12 haneli olmalıdır"),
  password: Yup.string().required("Şifre alanı boş bırakılamaz"),
  confirmPassword: Yup.string()
    .required("Şifre doğrulama alanı boş bırakılamaz")
    .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor"),
});

export const employerLoginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email alanını doldurunuz"),
  password: Yup.string().required("Şifre alanını doldurunuz"),
});




