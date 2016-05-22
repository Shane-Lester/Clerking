import {Page, NavController} from 'ionic-angular';
import {ScaleDetailPage} from '../scale-detail/scale-detail';


@Page({
    templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
    scales: Array<any>;
    constructor(public nav: NavController) {
        this.nav = nav;
        this.scales = [
            {
                title: "Frailty",
                description: "Frailty score",
                items: [{
                    score: "1",
                    name: "Very Fit",
                    image: "img/Capture1.jpg",
                    description: "info"
                },
                    {
                        score: "2",
                        name: "Well",
                        image: "img/Capture2.jpg",
                        description: ""
                    },
                    {
                        score: "3",
                        name: "Managing Well",
                        image: "img/Capture3.jpg",
                        description: "info"
                    },
                    {
                        score: "4",
                        name: "Vunerable",
                        image: "img/Capture4.jpg",
                        description: "info"
                    },
                    {
                        score: "5",
                        name: "Mildly Frail",
                        image: "img/Capture5.jpg",
                        description: "info"
                    },
                    {
                        score: "6",
                        name: "Moderately Frail",
                        image: "img/Capture6.jpg",
                        description: "info"
                    },
                    {
                        score: "7",
                        name: "Severely Frail",
                        image: "img/Capture7.jpg",
                        description: "info"
                    },
                    {
                        score: "8",
                        name: "Very Severely Frail",
                        image: "img/Capture8.jpg",
                        description: "info"
                    },
                    {
                        score: "9",
                        name: "Terminally Ill",
                        image: "img/Capture9.jpg",
                        description: "info"
                    }
                ]
            },
            { title: "Mini-Mental Score", description: "Quickly test mental state" },
            { title: "Performance status", description: "ECOG performance status rating" }
        ];

    }
    showScale(event, scale, index) {
        this.nav.push(ScaleDetailPage, { scale: scale, scaleIndex: index, ScalePage: this });
    }
}
