class Movie {
constructor (
  public year: number, 
  public country: string, 
  public slogan: string, 
  public genre: string, 
  public time: number
) {
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


