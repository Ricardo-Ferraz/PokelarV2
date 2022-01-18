export interface pokemon{
  id: string,
  nome: string,
  frontSprite: string,
  backSprite?: string,
  hp?: number,
  atk?: number,
  def?: number,
  spAtk?: number,
  spDef?: number,
  spd?: number,
  type1: string,
  type2?: string
}
