
public class HelloWorld {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		System.out.println("HelloWorld!");

		int a = 41;
		System.out.println(++a);
		System.out.println(++a);
		System.out.println(a++);
		System.out.println(++a);
		System.out.println(a++);
		System.out.println(++a);
		System.out.println(a++);
		System.out.println(++a);

		for(int x=0; x<15; x++){
			System.out.println(x*3+"★");
		}

		String b = a>=20?"プラス":"マイナス";
		System.out.println(b);

		if(a<20){System.out.println("未成年");}
		else if(a>=20&&a<=80){System.out.println("成人");}
		else{System.out.println("高齢者");}



		if(a>0){
			if(a<50){System.out.println("A");}
			else if(a==50){System.out.println("B");}
			else{System.out.println("C");}
			}

		int z =8;
		while(z<20){
			System.out.println(z);z++;
		}



	}

}