import * as Yup from "yup";

export const socialMediaValidationSchema = Yup.object().shape({
    url: Yup.string()
      .required("URL alanı boş bırakılamaz")
      .matches(
        "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]",
        "Url'yi https://www.xxxxx.com şeklinde giriniz"
      ),
  });