export class Product {

    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id,name,description ="",price=0,imageUrl="https://th.bing.com/th/id/OIP.YjhJ70U8l0LflqNh3hIfPQHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5"){

        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;

    }
}
