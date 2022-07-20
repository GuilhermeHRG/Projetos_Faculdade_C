#include<stdio.h>
#include<locale.h>
#include<stdlib.h>


int main ()
{
    setlocale(LC_ALL,"");
    int n1, n2, op;




    printf("\nESCOLHA A OPERAÇÃO: \n(+)somar \n(-)subtrair \n(*)multiplicar  \n(/)dividir \n(0)sair\n  ");
    scanf("%c",&op);

    printf("Digite um valor: ");
    scanf("%d",&n1);
    printf("Digite outro valor: ");
    scanf("%d",&n2);

    switch(op)
    {

    case 0:
        printf("Saindo...\n");
    case '+':
        printf("Soma: %d\n", n1 + n2);
        break;
    case '-':
        printf("Subtracao: %d\n", n1 - n2);
        break;
    case '*':
        printf("multiplicação: %d\n", n1 * n2);
        break;
    case '/':
        printf("divisão: %d\n", n1 / n2);
        break;
    default:
        printf("");
    }
}
