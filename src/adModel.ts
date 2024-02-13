import { randomUUID } from "crypto";
import { ad, coordinates, location } from "./types";

export default class Ad {
  constructor(private data: ad) { 
    this.data.id = randomUUID()
  }

  findByLocation({ country, city }: location) {
    if (this.data.location.country == country && this.data.location.city == city) {
      return true
    }

    return null
  }
}