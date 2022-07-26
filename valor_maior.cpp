#include<stdio.h>
#include<locale.h>

int main(void)
{
    setlocale(LC_ALL,"");
    int a, b, c, d;
    printf("----------------------------");
    printf("\nBEM-VINDO!!");
    printf("\n----------------------------");
    printf("\nDIGITE O VALOR DE A: ");
    scanf("%d",&a);
    printf("\nDIGITE O VALOR DE B: ");
    scanf("%d",&b);
    printf("\nDIGITE O VALOR DE C: ");
    scanf("%d",&c);
    printf("\nDIGITE O VALOR DE D: ");
    scanf("%d",&d);
    printf("\n----------------------------");
    if (a>b,a>c,a>d){
        printf("\nA É O MAIOR NÚMERO.",a);
    }
    else if(b>a,b>c,b>d){
        printf("\nB É O MAIOR NÚMERO.",b);
    }
    else if(c>a,c>b,c>d){
        printf("\nC É O MAIOR NÚMERO.",c);
    }
    else if(d>a,d>b,d>c){
        printf("\nD É O MAIOR NÚMERO.",d);
    }
    else if(a==b,a==c,a==d){
        printf("\nTODOS OS NÚMEROS SÃO IGUAIS.");
    }
    if (a<b,a<c,a<d){
        printf("\n\nA É O MENOR NÚMERO.");
    }
    else if(b<a,b<c,b<d){
        printf("\n\nB É O MENOR NÚMERO.");
    }
    else if (c<a,c<b,c<d){
        printf("\n\nC É O MENOR NÚMERO.");
    }
    else if (d<a,d<b,d<c){
        printf("\n\nD É O MENOR NÚMERO.");
    }
printf("\n----------------------------");
printf("\nCREATED BY GUILHERME ;)");
printf("\n----------------------------\n");
    }

