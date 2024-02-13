import { Request, Response } from "express";
import Ad from "./adModel";
import { resolveCoordinates, resolveIPLocation } from "./helpers";
import { ad, location } from "./types";

let ads: Ad[] = []

export async function findByCoordinates(req: Request, res: Response) {
  const latitude = req.params.latitude
  const longitude = req.params.longitude

  try {
    const location = await resolveCoordinates({ latitude, longitude })
    const ad = await findByLocation(location)

    return res.status(200).json(ad)
  } catch (error) {
    return res.status(500).json({ message: "Server error" })
  }
}

export async function findByIP(req: Request, res: Response) {
  try {
    const ip = req.ip
    
    if (!ip) {
      return res.status(404).json({ message: "no ads" })
    }

    const location = await resolveIPLocation(ip)
    const ad = await findByLocation(location)

    return res.status(200).json(ad)
  } catch (error) {
    return res.status(500).json({ message: "Server error" })
  }
}

export function createAd(data: ad) {
  const ad = new Ad(data)
  ads.push(ad)

  return ad
}

async function findByLocation(location: location) {
  return ads.filter(a => a.findByLocation(location))
}