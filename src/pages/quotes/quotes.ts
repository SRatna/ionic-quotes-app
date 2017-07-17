import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams,
              private alertController: AlertController,
              private quotesService: QuotesService) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(quote: Quote) {
    this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Do you really want to add this quote to your favorite quotes list?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFavorites(quote)
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

  onRemoveFromFavorites(quote: Quote) {
    this.alertController.create({
      title: 'Remove Quote',
      subTitle: 'Are you sure?',
      message: 'Do you really want to remove this quote from your favorite quotes list?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.removeQuoteFromFavorites(quote)
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

  isQuoteFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   //if we use this method then we need to add ? operator after quoteGroup in template
  //   //as template is drawn before this method
  // }
}
