type ResponseParams = {
  code: string;
  statusCode: number;
  message: string;
}

export default class Response {
  public code: string;
  public statusCode: number;
  public message: string;

  public constructor(response: ResponseParams) {
    this.code = response.code;
    this.statusCode = response.statusCode;
    this.message = response.message;
  }
}
