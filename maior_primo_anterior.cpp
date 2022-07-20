/*Escrever um programa para ler um número inteiro do usuário e exibir o maior
número primo que seja menor do que o número digitado.*/
#include<stdio.h>
#include<locale.h>
int main()
{
    setlocale(LC_ALL,"");
    int num, c=0, n1, n2;
    printf("insira um número: ");
    scanf("%d",&num);
    for (int n1=num-1; n1>=1; n1--)
    {
        for(int n2=2; n2<n1; n2++){
        if(n1%n2==0)
        c++;
        }
         if(c==0)
        {
         if(n1==1)
        {
            printf("não tem nenhum número primo próximo.");
            break;
        }
        printf(" o primo anterior é %d ",n1);
        break;
        }
        c=0;
    }
return 0;
}
