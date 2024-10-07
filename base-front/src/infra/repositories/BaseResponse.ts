type BaseResponse<T> = {
  result: {
    code: string;
    message: string;
    requestId: string;
    errors?: string[];
  },
  data?: T;
}

export default BaseResponse;
