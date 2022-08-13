#include<stdio.h>
#include<locale.h>
#include<math.h>

int main ()
{
    printf("BEM VINDO!!");
    printf("\n-------------------------------------------");
    setlocale(LC_ALL,"");
    double a, square, power;
    printf("\nDIGITE O VALOR DE A: ");
    scanf("%lf",&a);
    square = sqrt(a);
    power = pow(a,2);
    if(a>=0)
    {
        printf("\n-------------------------------------------");
        printf("\nRAIZ QUADRADA = %.2lf",square);
    }
    else
    {
        printf("\n-------------------------------------------");
        printf("\nO VALOR É NEGATIVO E SEU QUADRADO É = %.2lf",power);

    }
    printf("\n-------------------------------------------");
}
