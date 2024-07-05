export function inline() {
  console.log('Export nomeado inline')
}

export default function defaultInline() {
  console.log('Export default inline')
}

/**
 * export nomeado e inline
 * caso queira renomear o método basta passar o as
 * ex: import { inline as i } from "./path"
 * 
 * export default
 * no import não precisa das chaves
 * pode ser renomeado da forma que preferir
 * só pode ter um por arquivo
 */