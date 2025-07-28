export interface Language {
  name: string
  abbreviation: string
  imagePath: string
  value: any
}

export const english: Language = {
  name: 'English',
  abbreviation: 'EN',
  imagePath: '/public/english.svg',
  value: 'en',
}

export const ukrainian: Language = {
  name: 'Українська',
  abbreviation: 'UA',
  imagePath: '/public/ukrainian.svg',
  value: 'ua',
}

export const languages: Language[] = [english, ukrainian]

export function getSavedLanguageValue(): string {
  const language = localStorage.getItem('language')
  return language ? language : 'en'
}

export function getSavedLanguage(): Language {
  return defineLanguage(getSavedLanguageValue())
}

export function defineLanguage(value: string): Language {
  const index = languages.findIndex((language) => language.value == value)
  if (index != -1) {
    return languages[index]
  }
  return english
}
