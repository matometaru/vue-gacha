export default class Item {
  name: string;
  rare: number;
  description: string;

  constructor(name: string, rare: number, description: string) {
    this.name = name;
    this.rare = rare;
    this.description = description;
  }
}