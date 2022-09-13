import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-09.09.2022';

 public color:string;
 public fontSize:number;
 public defaultSize:number;
 public text:string
 array :any;
//  ngif
public toggleOn:any;
public showMe:any;
constructor(){
this.fontSize=50;
this.defaultSize=20;
this.color='red';
this.text = ''
this.array=["amresh","prasad"];
}

// two way binding
  fontsize(changeFont:string):void{
    this.fontSize=changeFont === 'dec'?this.fontSize-10:this.fontSize+10;

    if(this.fontSize=== 0 || this.fontSize===100){
        this.fontSize=this.defaultSize;
    }

  }
  // single binding
  keyup(value:any){
    this.text = value;

  }
  //two way binding

  value="";
  clearValue() {
   this.value="";
 }

//  add data in two way bindin
newarray:any=[];
add(add:string){
 this.newarray.push(add);

}
// create array
arraydata: any[] = [
  {
    "name": "Avengers"
  },
  {
    "name": "Good Boys"
  },
  {
    "name": "Playmobil"
  },
  {
    "name": "Aquarela"
  },
  {
    "name": "Aladdin"
  },
  {
    "name": "Downton Abbey"
  }
];

// Employee Data
 Employees:any[]= [
    {"id":"1","employee_name":"WdqBvFe","employee_salary":"797","employee_age":"36","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1925","employee_name":"Menaka6","employee_salary":"24501","employee_age":"24501","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1969","employee_name":"2381","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1970","employee_name":"6132","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1972","employee_name":"2022","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1973","employee_name":"4604","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1976","employee_name":"Shylu","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1977","employee_name":"8221","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1981","employee_name":"111test","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1996","employee_name":"test-709","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1997","employee_name":"test-654","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"1999","employee_name":"test-127","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"2001","employee_name":"test-301","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"},
    {"id":"2003","employee_name":"1769","employee_salary":"123","employee_age":"23","profile_image":"https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000"}
 ]

//  Delete(){
//   this.Employee.splice(0,1);
//  }
 Delete(element: number) {
  console.log(element)
  this.Employees.forEach((value,index_id)=>{
    if(value.id==element) this.Employees.splice(index_id,1);
});

}


//ngif

}
