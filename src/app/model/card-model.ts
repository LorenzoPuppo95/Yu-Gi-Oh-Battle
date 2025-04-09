export interface CardModel {
    id: number
    name: string
    atk: number
    def: number
    card_images: CardImage[]
  }
  
  export interface CardImage {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
  }
  