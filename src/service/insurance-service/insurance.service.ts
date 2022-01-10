import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuestionOptionsResponse} from "../../shared/interfaces/QuestionOptionsResponse";
import {
  ProductRecomendationRequest,
  ProductRecomendationsResponse
} from "../../shared/interfaces/ProductRecomendationsResponse";

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(
    private http: HttpClient
  ) { }

  public getQuestionOptions(category: string, type: string): Observable<QuestionOptionsResponse> {
    const url: string = `https://jsonplaceholder.typicode.com/posts/1`
    return this.http.get<QuestionOptionsResponse>(url, {
      params: {
        category,
        type
      }
    });
  }

  public productRecommendations(request: ProductRecomendationRequest): Observable<ProductRecomendationsResponse> {
    const url: string = `https://jsonplaceholder.typicode.com/posts`;
    return this.http.post<ProductRecomendationsResponse>(url, request);
  }
}
