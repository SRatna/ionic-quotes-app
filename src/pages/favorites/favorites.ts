import { Component } from '@angular/core';
import {QuotesService} from "../../services/quotes";
import {Quote} from "../../data/quote.interface";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favQuotes: Quote[];
  constructor(private quotesService: QuotesService, private modalController: ModalController) {
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

}
