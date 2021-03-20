export enum Category {
  Adventure = 'Adventure',
  Biographies = 'Biographies',
  BusinessMoney = 'Business & Money',
  History = 'History',
  Science = 'Science',
  Politics = 'Politics',
  GraphicNovels = 'Graphic Novels',
  Fiction = 'Fiction',
  Romance = 'Romance',
  Fantasy = 'Fantasy',
  ScienceFiction = 'Science Fiction',
  Arts = 'Arts',
  ChildrensBooks = 'Childrens Books',
}

export interface IBook {
  id: string;
  name: string;
  author: string;
  description: string;
  price: number;
  category: Category;
  createDate: number;
  isAvailable: boolean;
}
