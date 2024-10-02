class Movie {
    year: number
    country: string
    slogan: string
    genre: string
    time: number

constructor (year: number, country: string, slogan: string, genre: string, time: number) {
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.time = time;
    this.genre = genre;
  }

  public getYear(): number {
    return this.year;
  }

  public getCountry(): string {
    return this.country;
  }

  public getSlogan(): string {
    return this.slogan;
  }

  public getTime(): number {
    return this.time;
  }

  public getGenre(): string {
    return this.genre;
  }
}


