import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  topics;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.topics =[
      {title:"Presenting Complaint PC", description: ""},
      {title:"History of Presenting Complaint HPC", description: ""},
      {title:"Drug History DH", description: ""},
      {title:"Social History SH", description: ""},
      {title:"Cardiovascular History", description: ""},
      {title:"Respiratory History", description: ""},
      {title:"GastroIntestinal History", description: ""},
      {title:"Neurological History", description: ""}
    ]

  }
}
