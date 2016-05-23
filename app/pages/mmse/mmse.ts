import {Page, NavController, NavParams} from 'ionic-angular';
// import {NgClass} from 'angular2/common';

/*
  Generated class for the MmsePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/mmse/mmse.html',
})
export class MmsePage {
  score;
  total;
  constructor(public nav: NavController, public navParams:NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.score =[];
    for(let i=0;i<30;i++){
      this.score.push(0);
    }
    this.total =0;

  }
  toggleButton(number:number){
    if (this.score[number]==0){
      this.score[number] = 1;
    }
    else if(this.score[number]==1){
      this.score[number] = 0;
    }
    else{
      this.score[number] =1;
    }
    console.log(this.score[number]);
    var sum = 0;
    this.score.forEach(function(value){
      sum += value;
    })
    this.total = sum;
  }

  clearToggleButton(start:number,finish:number,active:number,amount:number){
    for(let i=start; i<=finish; i++){
      this.score[i]=0;
    };
    this.score[active]= amount;
    var sum = 0;
    this.score.forEach(function(value){
      sum += value;
    })
    this.total = Math.floor(sum);
  }



}
