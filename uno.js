/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar;
	var acumProgramador=0;
	var acumAnalista=0;
	var acumQa=0;
	var contProgramador=0;
	var contAnalista=0;
	var contQa=0;
	var promedioProgramador;
	var promedioAnalista;
	var promedioQa;
	var programadornoBinario=0;
	var flag=0;
	var mayorSueldo;
	var sexoMayor;
	var flagFemenino=0;
	var femeninoMayor;
	var nombreFemenino;

	
	do
	{
		nombre= prompt("Ingrese un nombre.");
		nombre= nombre.toLocaleLowerCase();
		while(!(isNaN(nombre))||nombre=="")
		{
			nombre= prompt("Dato incorrecto. Ingrese un nombre.");
			nombre= nombre.toLocaleLowerCase();
		}
		edad= parseInt(prompt("Ingrese una edad."));
		while(edad<18 ||isNaN(edad))
		{
			edad= parseInt(prompt("Dato incorrecto. Ingrese una edad."));
		}
		sexo= prompt("Ingrese un sexo(masculino - femenino - no binario).");
		sexo= sexo.toLocaleLowerCase();
		while(sexo!="masculino"&&sexo!="femenino"&&sexo!="no binario")
		{
			sexo= prompt("Ingrese un sexo(masculino - femenino - no binario).");
			sexo= sexo.toLocaleLowerCase();
		}
		puesto= prompt("Ingrese un puesto(programador - analista - Qa).");
		puesto= puesto.toLocaleLowerCase();
		while(puesto!="programador"&&puesto!="analista"&&puesto!="qa")
		{
			puesto= prompt("Dato incorrecto. Ingrese un puesto(programador - analista - Qa).");
			puesto= puesto.toLocaleLowerCase();
		}
		sueldo= parseInt(prompt("Ingrese un sueldo."));
		while(isNaN(sueldo)||sueldo<15000||sueldo>70000)
		{
			sueldo= parseInt(prompt("Dato incorrecto. Ingrese un sueldo."));
		}

		if(flag==0||sueldo>mayorSueldo)
		{
			mayorSueldo= sueldo;
			sexoMayor= sexo;
			flag=1;
		}
		if(sexo=="femenino")
		{
			if(flagFemenino==0||sueldo>femeninoMayor)
			{
				femeninoMayor= sexo;
				nombreFemenino= nombre;
				flagFemenino=1;
			}
		}
		switch(puesto)
		{
			case"programador":
				if(sexo =="no binario")
				{
					if(sueldo>20000 || sueldo<55000)
					{
						programadornoBinario++;
					}
				}
				acumProgramador= acumProgramador+sueldo;
				contProgramador++;
				break;
			case"analista":
				acumAnalista= acumAnalista+sueldo;
				contAnalista++;
				break;
			case"qa":
				acumQa= acumQa+sueldo;
				contQa++;
				break;
		}
		continuar= prompt("¿Desea continuar?(si/no)");
	}while(continuar=="si");

	if(contProgramador>0)
	{
		promedioProgramador= acumProgramador / contProgramador;
	}
	else
	{
		promedioProgramador="No hay programadores.";
	}
	if(contAnalista>0)
	{
		promedioAnalista= acumAnalista / contAnalista;
	}
	else
	{
		promedioAnalista= "No hay analistas.";
	}
	if(contQa>0)
	{
		promedioQa= acumQa / contQa;
	}
	else
	{
		promedioQa= "No hay analistas.";
	}
	if(flagFemenino==0)
	{
		nombreFemenino= "No hay mujeres."
	}

	document.write("Promedio programador: "+promedioProgramador+"Promedio analista: "+promedioAnalista+"Promedio qa: "+promedioQa+"<br>"+
					"Sexo del mayor sueldo: "+sexoMayor+"Nombre del empleado femenino con mayor sueldo: "+nombreFemenino+"<br>"+
					"Cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000: "+programadornoBinario)
					
}
