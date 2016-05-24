import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the HistoryDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/exam-detail/exam-detail.html',
})
export class ExamDetailPage {
  exam;
  constructor(public nav: NavController , public navParams:NavParams) {
    this.navParams = navParams;
    this.exam = this.navParams.get('exam');

  }
}
