import { useIntl } from "react-intl";

export const useTranslate = () => {
  const intl = useIntl();

  const t = (id, values) => {
    return intl.formatMessage({ id, defaultMessage: id }, values);
  };

  //   const isMyanmar = intl.locale === "my" || intl.locale === "mm";

  return t;
};
