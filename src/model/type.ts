export const typeConverter = {
  toFirestore: (type: Type) => {
      return {
          name: type.name,
          id: type.id,


      };
  },
  fromFirestore: (snapshot: any, options: any) => {
      const data = snapshot.data(options);

      return new Type(
          snapshot.id,
          data.name,

      );
  }
};

export class Type {
  constructor(
      public id: string,
      public name: string,

  ) {}

  toString(): string {
      return `${this.id}, ${this.name},`;
  }
}
