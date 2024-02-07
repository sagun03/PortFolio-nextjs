using System;

public class HelloWorld
{
  public static void Main(string[] args)
   {
     Console.WriteLine("\nNumber 1 to 20!");
     for (int i = 0; i <= 20; i++)
       {
        Console.WriteLine(i + "\t"); 
}
    Console.WriteLine("\nOdd Values Start From Here!");

for (int i=3;i<=29;i++){
if (i%2!=0){
Console.WriteLine(i +"\t");
}

}
        Console.WriteLine("\nEven Values Start From Here!");

for (int i = 12; i >= -14; i--)
{

if (i % 2 == 0)
{
Console.WriteLine(i + "\t");
}
}
            Console.WriteLine("\n Starting from 50 till 20!");

for (int i = 50; i >= 20; i--)
{

if (i % 3 == 0)
{
Console.WriteLine(i + "\t");
}
}
}
}

