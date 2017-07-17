import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams, private alertController: AlertController) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote: Quote) {
    this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Do you really want to add this quote to your favorite quotes list?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('yes')
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            //console.log('no')
          }
        }
      ]
    }).present();
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   //if we use this method then we need to add ? operator after quoteGroup in template
  //   //as template is drawn before this method
  // }

}
