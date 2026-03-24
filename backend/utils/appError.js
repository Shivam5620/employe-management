// utils/ApiResponse.js
export default class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.status = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}