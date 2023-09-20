import * as Yup from "yup";

export const jobSeekerRegisterValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("İsim alanı boş bırakılamaz")
    .min(3, "İsim alanı en az 3 karakter içermelidir"),
  lastName: Yup.string()
    .required("Soyisim alanı boş bırakılamaz")
    .min(3, "Soyisim alanı en az 3 karakter içermelidir"),

  email: Yup.string()
    .required("Email alanı boş bırakılamaz")
    .matches(
      "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$",
      "Email Regex ile doğrulanamadı"
    ),
    dateOfBirth: Yup.string().required("Doğum tarihinizi seçiniz"),

  universityId: Yup.string().required("Üniversite alanını seçiniz"),
  departmentId: Yup.string().required("Bölüm alanını seçiniz"),
  entranceDate:Yup.string().required("Giriş tarihinizi seçiniz"),

  identityNumber: Yup.string()
    .required("TC Kimlik alanı boş bırakılamaz")
    .max(11, "TC Kimlik 11 haneli olmalı")
    .min(11, "TC Kimlik 11 haneli olmalı"),
  password: Yup.string()
    .required("Şifre alanı boş bırakılamaz")
    .min(3, "Şifre alanı en az 3 karakter olmalıdır"),
  confirmPassword: Yup.string()
    .required("Şifre doğrulama alanı boş bırakılamaz")
    .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor"),
});

export const jobSeekerLoginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email alanını doldurunuz"),
  password: Yup.string().required("Şifre alanını doldurunuz"),
});
