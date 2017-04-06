import java.util.*;

abstract class Book {
    String title;
    String author;

    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    // Here is an abstract method ......
    // allow children to fill the content
    abstract void display();
}

class MyBook extends Book{
    public int p;
    MyBook(String title,String author,int price){
        super(title,author);
        p=price;
    }
    void display(){
        System.out.println("Title: "+title);
        System.out.println("Author: "+author);
        System.out.println("Price: "+p);
    }
}
