public class Test {

	public static void main(String[] args){

Person taro = new Person();
Person jiro = new Person();
Person hanako = new Person();
Person kazuki = new Person();

Robot aibo = new Robot();
Robot asimo = new Robot();
Robot pepper = new Robot();

taro.name="山田太郎" ;
taro.age=20;
taro.phoneNumber="000-0001";
taro.address="東京";

jiro.name="木村次郎";
jiro.age=18;
jiro.phoneNumber="000-0002";
jiro.address="神奈川";

hanako.name="鈴木花子";
hanako.age=16;
hanako.phoneNumber="000-0003";
hanako.address="千葉";

kazuki.name="渡邊和希";
kazuki.age=23;
kazuki.phoneNumber="000-0004";
kazuki.address="埼玉";



aibo.name="aibo";
asimo.name="asimo";
pepper.name="pepper";

aibo.talk();
asimo.walk();
pepper.run();

System.out.println(taro.name);
System.out.println(taro.age);
System.out.println(taro.phoneNumber);
System.out.println(taro.address);

taro.run();
taro.walk();



System.out.println(jiro.name);
System.out.println(jiro.age);
System.out.println(jiro.phoneNumber);
System.out.println(jiro.address);

jiro.talk();
jiro.walk();



System.out.println(hanako.name);
System.out.println(hanako.age);
System.out.println(hanako.phoneNumber);
System.out.println(hanako.address);

hanako.talk();
hanako.walk();



System.out.println(kazuki.name);
System.out.println(kazuki.age);
System.out.println(kazuki.phoneNumber);
System.out.println(kazuki.address);

kazuki.talk();
kazuki.walk();

	}
}
