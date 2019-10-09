export default class Rank {
  private static readonly _values: Rank[] = []

  static readonly Rare = new Rank("レア", 3, 70)
  static readonly SuperRare = new Rank("スーパーレア", 4, 25)
  static readonly LegendRare = new Rank("レジェンドレア", 5, 5)

  private constructor(
    readonly name: string,
    readonly value: number,
    readonly probability: number,
  ) {
    Rank._values.push(this)
  }

  static values(): Rank[] {
    return Rank._values
  }
}