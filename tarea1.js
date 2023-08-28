/*Crear un archivo de JavaScript que contenga lo siguiente:
-Declaración de variables usando las palabras clave const y let.
-Leer los condicionales que existen en JavaScript del link entregado y de cada uno realizar un ejemplo
distinto al de la página usando los condicionales en JavaScript. */

            const array = [1,2,3,4,5,6,7,8,9,10,11];

            const Condicionales = (num1,num2) => {
                let suma = 0, resta = 0, multiplicacion = 0, division = 0;
            
                if (array.includes(num1) && array.includes(num2)) {
                    console.log("Los números ya están insertados en el array");
                } else if (array.includes(num1) && !array.includes(num2)) {
                    num2 = 2;
                } else if (array.includes(num2) && !array.includes(num1)) {
                    num1 = 2;
                } else{
                    num1 = 1;
                    num2 = 2;
                }
            
                suma = num1 + num2;
                resta = array[num1] - num2;
                multiplicacion = array[num2] * num1;
                division = num1 / num2;
                
                console.log(`
                    Suma = ${suma}
                    Resta = ${resta}
                    Multiplicación = ${multiplicacion}
                    División = ${division}
                    `)
            
            }
            
            Condicionales(0,13);
            //------------------------------------------------------------------------------
            
            const mis_peliculas = [
                {
                    Opcion : "1",
                    Titulo: "Río 1",
                    Vista: true
                },{
                    Opcion : "2",
                    Titulo: "Río 2",
                    Vista: false
                },{
                    Opcion : "3",
                    Titulo: "Los vengadores: Endgame",
                    Vista: true
                },{
                    Opcion : "4",
                    Titulo: "Spiderman: no way home",
                    Vista: false
                }
            ]
            
            function Peliculas( ) {
                for (const pelicula of mis_peliculas) {
                    if (pelicula.vista) {
                        console.log(`Ya viste: ${pelicula.titulo} \n`)
                    }else{
                        console.log(`Aún te falta por ver: ${pelicula.titulo} \n`)
                    }
                }
            }
            
            Peliculas();
            
            //----------------------------------------------------------------
            
            const num_Base = 4;
            let factorial = 1;
            
            for (let i = 1; i <= num_Base; i++) {
                factorial *= i
            }
            
            console.log(`El factorial de ${num_Base} es: ${factorial}\n`);
            
            //-----------------------------------------------------------------
            
            function while_switch(num1, num2, num3) {
                switch (num1) {
                    case 1:
                        while (num3 < (num2*4)) {
                            num3++;
                        }
                        console.log(num3)
                        break;
                    case 2:
                        do {
                            num2++;
                        } while (num2 < (num3*3));
                        console.log(num2)
                        break;
                    default:
                        break;
                }
            }
            while_switch(2,5,6);