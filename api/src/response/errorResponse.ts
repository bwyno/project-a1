export class ErrorResponse {
  data: {
    errorCode: string;
    details: any;
  };

  constructor(errorCode: string, details: any) {
    this.data = {
      errorCode: errorCode,
      details: details,
    };
  }
}
