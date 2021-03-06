export class Helper<T> {
  // public static async saveDataInchunksIntoWherehouseDb<T>(
  //   data: T[],
  //   repo: any,
  // ): Promise<T> {
  //   try {
  //     console.log(data.length);
  //     const length = data.length;
  //     const chunkSize = 1000;
  //     console.log('save starts ', new Date());
  //     for (let i = 0; i < length; i += chunkSize) {
  //       const chunks = data.slice(i, i + chunkSize);
  //       await repo.create(chunks);
  //     }
  //     console.log('save ends ', new Date());
  //     return null;
  //   } catch (error) {
  //     console.log('saveDataInWherehouseDb', error);
  //   }
  // }
  // static isLength<T>(data: T[]): boolean {
  //   return data.length > 0 ? true : false;
  // }

  public static removeFields<T>(object: any, extraProps: string[] = []): T {
    let removeableProps = ["isDeleted", "isPurged"];
    const newRemoveableProps = removeableProps.concat(extraProps);
    const length = newRemoveableProps.length;
    let newObjectAny = { ...object };
    for (let i = 0; i < length; i++) {
      delete newObjectAny[newRemoveableProps[i]];
    }
    return newObjectAny;
  }
}
