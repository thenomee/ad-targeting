export type ad = {
  id?: string
  title: string
  description: string
  location: location
}

export type coordinates = {
  latitude: string,
  longitude: string
}

export type location = {
  country: string
  city: string
}