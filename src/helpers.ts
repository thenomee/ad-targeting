import { createAd } from "./AdController";
import { coordinates, location } from "./types";

export async function resolveCoordinates({ latitude, longitude }: coordinates) {
  const res = await fetch(`${process.env.GEOCODE_API}?latlng=${latitude},${longitude}&key=${process.env.GEOCODE_API_KEY}`)

  if (!res.ok) {
    throw new Error("Field to fetch location")
  }

  const location = await res.json() as location

  return location
}

export async function resolveIPLocation(ip: string) {
  const res = await fetch(`${process.env.GEO_IP_API}?ip=${ip}&key=${process.env.GEO_IP_KEY}`)

  if (!res.ok) {
    throw new Error("Field to fetch location")
  }

  const location = await res.json() as location

  return location
}

export function initData() {
  createAd({
    title: "Ad one",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam iure adipisci a voluptatum tempore? Ex illum",
    location: {
      city: "Islamabad",
      country: "Pakistan"
    }
  })

  createAd({
    title: "Ad two",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam iure adipisci a voluptatum tempore? Ex illum",
    location: {
      city: "Rawalpindi",
      country: "Pakistan"
    }
  })

  createAd({
    title: "Ad three",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam iure adipisci a voluptatum tempore? Ex illum",
    location: {
      city: "Lahore",
      country: "Pakistan"
    }
  })
}