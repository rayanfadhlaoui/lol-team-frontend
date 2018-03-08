import { HttpHeaders } from "@angular/common/http";

export const headers = {
  headers: new HttpHeaders({
    Accept: "application/json",
    "Content-Type": "application/json"
  })
};

export default headers;
