import {Page, NavController, NavParams} from 'ionic-angular';
import {DetailPage} from '../detail/detail';


/*
  Generated class for the ScaleDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/scale-detail/scale-detail.html',
})
export class ScaleDetailPage {
  scale;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.scale = this.navParams.get('scale');

  }
  itemDetail($event,item){
    this.nav.push(DetailPage,{item:item});
  }
}
