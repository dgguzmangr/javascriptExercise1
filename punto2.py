"""
base = int(input("Por favor ingresa la altura del triángulo: "))
altura = int(input("Por Por favor ingresa la base del triángulo: "))
area = (base*altura)/2
print(area)
"""

edades = []

while len(edades) < 10:
    try:
        edad = int(input("Ingresa una edad entre 1 y 120 años: "))
        if edad < 1 or edad > 120:
            print("El número debe estar en un rango entre 1 y 120 años.")
        else:
            edades.append(edad)
        print("Las edades registradas  hasta el momento son: " + str(edades))
    except ValueError:
        print("Debes ingresar un número entero válido.")

print("Las edades registradas son: " + str(edades))

#edades = [79, 7, 8, 9, 45, 36, 99, 78, 89, 5]

cantMenores = 0
cantMayores = 0
cantAdultosMayores = 0
edadMasBaja = min(edades)
edadMasAlta = max(edades)

for edad in edades:
    if edad >=61:
        cantAdultosMayores +=1
    elif edad < 18:
        cantMenores +=1
    elif edad >= 18 or edad <=60:
        cantMayores +=1

cantMayoresEdad = cantAdultosMayores + cantMayores

print("Se encontraron " + str(cantMenores) + " menores de edad")
print("Se encontraron "+ str(cantMayoresEdad) + " mayores de edad")
print("Se encontraron " +str(cantAdultosMayores) + " adultos mayores")
print("La edad más baja registrada es " + str(edadMasBaja) + " años")
print("La edad más alta registrada es " + str(edadMasAlta) + " años")