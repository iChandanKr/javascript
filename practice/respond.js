const respondOk = (res, result = {}) => {
  res.status(200).send(result);
};

const respondError = (res, result = {}, errorCode = 500) => {
  res.status(result.code ? result.code : errorCode).send({
    message: result.message,
    ...(result.data && { data: result.data }),
  });
};


const errorMessage = {
  SOMETHING_WENT_WRONG: "Something went wrong. Please try after some time.",
  INVALID_TOKEN: "Token is invalid or expired.",
  INVALID_OTP: "OTP is invalid or expired.",
  NO_NEW_OTP: "You must wait 30 seconds before requesting a new OTP",
  LIMIT_EXCEEDED: "Request limit exceeded. Please try after some time.",
  INVALID_USER: "This user is not registered in the platform.",
  REGISTER_ERROR: "Account not found. Please sign up to get started!",
  INVALID_CREDENTIALS: "Username or password is invalid.",
  SESSION_EXPIRED: "Your session has been expired. Please login again.",
  INVITATION_INVALID:
    "Your invitation is invalid or expired. Please contact admin.",
  INVITATION_ACCESS_ERROR:
    "You do not have permission to access this invitation. Please check the link and try again, or contact the sender for assistance.",
  ALREADY_REGISTERED: "You are already registered.",
  USER_UNAUTHORIZED: "You are not authorized to perform this operation",
  SEND_MAIL_FAILED: "Failed to send mail",
  ORG_NOT_FOUND: "Organization not found.",
  REVOKE_FAILED: "Revoke for some invitations failed.",
  RESET_PASSWORD_NOT_FOUND:
    "Request for reset password not found. Please try again.",
};

const successMessage = {
  OTP_SENT: "OTP sent successfully",
  OTP_VERIFIED: "OTP verified successfully",
  RESET_PASSWORD: "Password changed successfully",
  RESET_PASSWORD_MAIL_SENT: "Please check your mail to reset password.",
  INVITE_MAIL_START: "Process to send mail started successfully",
  REGISTER_SUCCESS: "Congratulations, you have been successfully registered.",
  USER_LOGOUT: "Successfully logged out.",
  INVITE_REVOKED: "Invitation revoked successfully.",
};

class ApplicationError extends Error {
  /**
   * Initializes a new instance of `ApplicationError`.
   * @param {string} message The error message.
   * @param {Object} data Optional error data.
   */
  constructor(message, data) {
    super();

    if (typeof data === "object") {
      Object.assign(this, data);
    }

    this.message = message || errorMessage.SOMETHING_WENT_WRONG;

    this.code = ApplicationError.InvalidOperation;
  }
}

ApplicationError.BadRequest = 400;

ApplicationError.InvalidOperation = 500;

ApplicationError.Unauthorized = 401;

ApplicationError.Forbidden = 403;

ApplicationError.NotFound = 404;

ApplicationError.Conflict = 409;

ApplicationError.NotSupported = 415;

ApplicationError.TooManyRequests = 429;

ApplicationError.NotImplemented = 501;

ApplicationError.Timeout = 504;

ApplicationError.SessionTimeout = 440;

ApplicationError.create = (err, data) => {
  let message = err;
  let info = data;
  let code = ApplicationError.InvalidOperation;
  let messageFromError;

  if (info) {
    messageFromError = typeof info === "string" ? info : info.message;
  }

  if (typeof err === "number") {
    const key = Object.keys(ApplicationError).filter(
      (k) => ApplicationError[k] === err
    )[0];

    if (key) {
      code = ApplicationError[key];
      message = messageFromError || key;
    } else {
      code = err;
      message = messageFromError || String(err);
    }
  } else if (typeof err === "string" && ApplicationError[err]) {
    code = ApplicationError[err];
    message = messageFromError || err;
  } else if (typeof err !== "string" && info === undefined) {
    info = err;
    message = info.message || "InvalidOperation";
  }

  const error = new ApplicationError(message, info);
  error.code = code;
  return error;
};

module.exports = {
  respondOk,
  respondError,
  ApplicationError,
  errorMessage,
  successMessage,
};
