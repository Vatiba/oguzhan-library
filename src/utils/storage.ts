export interface PersistentStorage {
   getItem(key: string): string | null
   setItem(key: string, value: any): void
}

class LocalStorage implements PersistentStorage {

   private static instance: LocalStorage;

   private constructor() { }

   public static getInstance(): LocalStorage {
      if (!LocalStorage.instance) {
         LocalStorage.instance = new LocalStorage();
      }
      return LocalStorage.instance;
   }

   public getItem<T>(key: string) {
      const item = localStorage.getItem(key)

      if (item === null) return null
      else if (item === "null") {
         this.setItem(key)
         return null
      }
      else if (item === "undefined") {
         this.setItem(key)
         return null
      }

      try {
         return JSON.parse(item)
      } catch { }

      return item
   }
   public setItem(key: string, value?: any) {
      if (value === undefined) {
         localStorage.removeItem(key)
      } else {
         localStorage.setItem(key, JSON.stringify(value))
      }
   }
}


export default LocalStorage;
