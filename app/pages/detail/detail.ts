import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  item;
  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.item = this.navParams.get('item');
  }
}
