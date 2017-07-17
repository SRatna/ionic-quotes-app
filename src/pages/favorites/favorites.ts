import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {AlertController, ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favQuotes: Quote[];
  constructor(private quotesService: QuotesService, private alertController: AlertController,
              private modalController: ModalController) {
  }

  ionViewWillEnter() {
    this.favQuotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    let modal = this.modalController.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss(remove => {
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(quote);
      }
    })
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

}
