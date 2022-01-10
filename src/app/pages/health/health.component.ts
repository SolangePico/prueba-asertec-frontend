import {Component, OnInit} from '@angular/core';
import {InsuranceService} from "../../../service/insurance-service/insurance.service";
import {QuestionOptionsResponse} from "../../../shared/interfaces/QuestionOptionsResponse";
import {
  ProductRecomendationRequest,
  ProductRecomendationsResponse
} from "../../../shared/interfaces/ProductRecomendationsResponse";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  public question1Options: QuestionOptionsResponse[] = [];
  public question2Options: QuestionOptionsResponse[] = [];
  public personQuantitySelected: number = -1;
  public ageSelected: number = -1;
  constructor(private insuranceService: InsuranceService) {
  }

  ngOnInit(): void {
    this.insuranceService.getQuestionOptions('seguros-de-salud', 'question_1').subscribe((response: QuestionOptionsResponse) => {
      this.question1Options = [{"id":4,"name":"1 menor de edad","type":"question_1"},{"id":5,"name":"1 mayor de edad","type":"question_1"},{"id":6,"name":"2 mayores de edad","type":"question_1"},{"id":7,"name":"Toda mi familia","type":"question_1"}];
      // this.question1Selected = this.question1Options[0].id;
    });
    this.insuranceService.getQuestionOptions('seguros-de-salud', 'question_2').subscribe((response: QuestionOptionsResponse) => {
      this.question2Options = [{"id":8,"name":"0 a 3 años","type":"question_2",},{"id":9,"name":"4 a 17 años","type":"question_2"},{"id":10,"name":"18 a 40 años Masculino","type":"question_2"},{"id":11,"name":"18 a 40 años Femenino","type":"question_2"},{"id":12,"name":"41 a 60 años","type":"question_2"},{"id":13,"name":"61 en adelante","type":"question_2"},{"id":14,"name":"18 a 60 años","type":"question_2"},{"id":13,"name":"61 en adelante","type":"question_2"},{"id":15,"name":"1 Adulto y 1 menor Masculino","type":"question_2"},{"id":16,"name":"1 Adulto y 1 menor Femenino","type":"question_2"},{"id":17,"name":"2 Adultos","type":"question_2"},{"id":18,"name":"2 Mayores","type":"question_2"}];
      // this.question2Selected = this.question2Options[0].id;
    });
  }

  public searchProductsInsurance(): void {
    if (this.personQuantitySelected === -1 || this.ageSelected === -1) {
      alert('Debe seleccionar los campos requeridos');
      return;
    }
    const productRequest: ProductRecomendationRequest = {
      personQuantity: this.personQuantitySelected,
      age: this.ageSelected
    }
    this.insuranceService.productRecommendations(productRequest).subscribe((response: ProductRecomendationsResponse) => {
      alert(JSON.stringify(response));
    })
  }

}
