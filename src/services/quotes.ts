/**
 * Created by osho on 7/17/17.
 */
import {Quote} from "../data/quote.interface";
export class QuotesService {
  private favQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favQuotes.push(quote);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const index = this.favQuotes.findIndex((myQuote: Quote) => {
      return myQuote.id == quote.id;
    });
    this.favQuotes.splice(index, 1);
  }

  getFavoriteQuotes() {
    // return this.favQuotes.slice();
    return this.favQuotes;
  }

  isQuoteFavorite(quote: Quote) {
    let found = this.favQuotes.find((myQuote: Quote) => {
      return myQuote.id == quote.id;
    });
    return !!found;
  }
}
