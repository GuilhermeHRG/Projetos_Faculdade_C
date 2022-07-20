/*17. Fazer um programa no qual o usuário vai entrando sucessivamente com valores
positivos. Quando o usuário entrar com um valor negativo o programa pára de
pedir valores e calcula a média dos valores já fornecidos.*/
#include<stdio.h>
#include<locale.h>

int main()
{
    setlocale(LC_ALL,"");
    int vh=0, sm=0,qtd=0, num=0;
    float md;
    printf("digite um valor positivo ou um negativo para sair: ");
        scanf("%d",&num);
    while(num>0){
        printf("digite um valor positivo ou um negativo para sair: ");
        scanf("%d",&num);
        if(num>-1)
        {
        qtd++;
        sm=sm+num;
    }

    }
printf("%d",sm);
printf("%d",qtd);
md=sm/qtd;
printf(" a média é :%.2f",md);


}
