export const userConverter = {
  toFirestore: (user: User) => {
    return {
      isAcount:user.isAcount,
      image: user.image,
      nom: user.nom,
      nomEntreprise: user.nomEntreprise,
      photo: user.photo,
      email: user.email,
      tel: user.tel,
      ville: user.ville,
      typeId: user.typeId,
      id: user.id,
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return new User(
      data.isAcount,
      data.image,
      data.nom,
      data.nomEntreprise,
      data.photo,
      data.email,
      data.tel,
      data.ville,
      data.typeId,
      snapshot.id,
    );
  }
};
export class User {
  constructor(
    public isAcount: boolean,
    public image: string,
    public nom: string,
    public nomEntreprise: string,
    public photo: string,
    public email: string,
    public tel: string,
    public ville: string,
    public typeId: string,
    public id: string,
  ) { }

  toString(): string {
    return `${this.nom}, ${this.nomEntreprise}, ${this.photo}, ${this.email}, ${this.tel}, ${this.ville}, ${this.typeId}`;
  }
}
