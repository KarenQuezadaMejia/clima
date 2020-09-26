import { from } from 'rxjs';
import{Component, OnInit} from '@angular/core';
import { weatherService } from 'src/app/service/weather.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent implements OnInit {
    titleArray : any;
    listTabla: any;

    constructor(private wedeeer: weatherService){
    }


    ngOnInit(): void {
        this.wedeeer.listarPais().subscribe(data =>{
            this.titleArray = data;
            console.log(this.titleArray, "krena");

        })
        
    }

    listar(event){
        this.titleArray.forEach(element => {
            console.log("event: ", event, "element.id: " + element.id);

            if(event == element.id){
                console.log("si");
                
        this.wedeeer.getWeather(element.name, element.id)
        .subscribe(
          res => (this.crearTABLA(res) ) ,
          err => console.log(err),
        )
            }
        });


    }

    crearTABLA(event){
        console.log("llegue");
        
this.listTabla = [];
this.listTabla.push(
    event
)
console.log(this.listTabla);

    }

      getWeather(cityName, countryCode){

      }

}