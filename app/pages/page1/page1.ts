import {Page, NavController} from 'ionic-angular';
import {HistoryDetailPage} from  '../history-detail/history-detail';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  topics;
  constructor(public nav: NavController) {
    this.nav = nav;
    this.topics =[
      {title:"Presenting Complaint PC", description: "The Presenting Complaint, PC, is.."},
      {title:"History of Presenting Complaint HPC", description: "The History of Presenting Complaint HP is.. "},
      {title:"Drug History DH", description: "The Drug History DH is.."},
      {title:"Social History SH", description: "The Social History SH is.."},
      {title:"Cardiovascular History", description: "The Cardiovascular History is.."},
      {title:"Respiratory History", description: "The Respiratory History is.."},
      {title:"GastroIntestinal History", description: "The GastroIntestinal History is.."},
      {title:"Neurological History", description: "The Neurological History is.."}
    ]

  }
  showTopic(event, topic, index){
    this.nav.push(HistoryDetailPage,{topic:topic});
  }
}
