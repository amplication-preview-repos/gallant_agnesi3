import { Promocode as TPromocode } from "../api/promocode/Promocode";

export const PROMOCODE_TITLE_FIELD = "id";

export const PromocodeTitle = (record: TPromocode): string => {
  return record.id?.toString() || String(record.id);
};
