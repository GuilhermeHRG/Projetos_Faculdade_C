#include<stdio.h>
#include<locale.h>
int main()
{
    setlocale(LC_ALL,"");
    float ld, a;
    int op;
    printf("PARA CALCULAR A ÁREA DE TRIANGULO(3)\n\nPARA CALCULAR A ÁREA DE QUADRADO(4)\n\nPARA CALCULAR A ÁREA DE HEXÁGONO(6) \n");
    printf("\ndigite a opção: ");
    scanf("%d",&op);
    if(op!=4 && op!=3 && op!=6){
        printf("Não pode digitar números além de 3, 4 e 6\nFechando programa...");
    }
    else{
    switch(op){
case 3:
    printf("digite o tamando do lado: ");
    scanf("%f",&ld);
    a=ld*ld*1.73/4;
    printf("a área eh: %.2f",a);
    break;
case 4:
    printf("digite o tamando do lado: ");
    scanf("%f",&ld);
    a=ld*ld;
    printf("a área eh: %.2f",a);
    break;
case 6:
    printf("digite o tamando do lado: ");
    scanf("%f",&ld);
    a=6*ld*ld*1.73/4;
    printf("a área eh: %.2f",a);
    break;

    }
    }
}
