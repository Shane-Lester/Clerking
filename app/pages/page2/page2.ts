import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  exams;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.exams =[

      {title:"Cardiovascular Exam", description: ""},
      {title:"Respiratory Exam", description: ""},
      {title:"GastroIntestinal Exam", description: ""},
      {title:"Neurological Exam", description: ""}
    ];

  }
}
