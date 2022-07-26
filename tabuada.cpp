/*Fazer um programa em C que imprime uma tabela com a tabuada de 1 a 9*/
#include<stdio.h>
#include<stdlib.h>
#include<locale.h>

int main(void)
{
    printf("BEM-VINDO!!");
    printf("\n----------------------------------------");
    setlocale(LC_ALL,"");
    int num, aux;
    aux=1;
    printf("\nINSIRA UM NÚMERO PARA INICIALIZAR A TABUADA: ");
    scanf("%d",&num);
    printf("\n----------------------------------------");
    printf("\nTABUADA DO NÚMERO: %d\n",num);
    for(aux==1; aux<=9; aux++)
    {
        printf("\n %d x %d = %d \n " ,num,aux,num*aux);
    }
    printf("----------------------------------------");
    return 0;

}

