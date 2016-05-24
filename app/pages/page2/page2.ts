import {Page, NavController} from 'ionic-angular';
import {ExamDetailPage} from '../exam-detail/exam-detail';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  exams;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.exams =[

      {title:"Cardiovascular Exam", description: "The first thing in the Cardiovascular Exam is... "},
      {title:"Respiratory Exam", description: "The first thing in the Respiratory Exam is... "},
      {title:"GastroIntestinal Exam", description: "The first thing in the GI Exam is... "},
      {title:"Neurological Exam", description: "The first thing in the Neurological Exam is... "}
    ];

  }
  showExam(event, exam, index){
    this.nav.push(ExamDetailPage,{exam:exam});
  }
}
