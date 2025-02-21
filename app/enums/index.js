export const NotifyType = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
});
export const NotifyMessage = Object.freeze({
  SUCCESS_ACTION: "عملیات مورد نظر با موفقیت انجام شد",
  GLOBAL_ERROR: "خطایی رخ داده است",
});
export const VehicleType = Object.freeze({
  CAR: "SAVARI",
  MOTOR: "MOTOR",
});

export const Regex = Object.freeze({
  MOBILE: new RegExp(/^[0][9][0-9][0-9]{8}$/),
  NATIONAL_CODE: new RegExp(/^([0-9]){10}$/),
  EMAIL: new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z1-9]+/),
  CAR_SHASI: new RegExp(/^[A-HJ-NPR-Z0-9]{17}$/),
  INSURANCE_THIRD: new RegExp(/^\d{10}$/),
});
