export const page = "1";
export const per_page = "20";

export const start = (parseInt(page) - 1) * parseInt(per_page);
export const end = start + parseInt(per_page);
