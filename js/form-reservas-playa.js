function agregarOpciones(form) {
    debugger;
    var sucursal = form.sucursal.options;
    var habitacion = form.habitacion.options;
    var tiempo = form.tiempo.options;
    var indiceHabitacion = habitacion.selectedIndex;
    habitacion.length = null;
    tiempo.length = null;

    //Sin selección
    if (sucursal.selectedIndex == 0) {
        var habitacionesVacias = new Option("Esperando Sucursal");
        var tiempoVacio = new Option("Esperando Habitación");
        habitacion[0] = habitacionesVacias;
        tiempo[0] = tiempoVacio;
    }

    //Constituyentes
    if (sucursal.selectedIndex == 1) {
        var cargaHabitaciones1 = new Option("Junior Suite");
        var cargaHabitaciones2 = new Option("Jacuzzi Suite");
        var cargaHabitaciones3 = new Option("Alberca Suite");
        habitacion[0] = new Option("Selecciona Habitación");
        habitacion[1] = cargaHabitaciones1;
        habitacion[2] = cargaHabitaciones2;
        habitacion[3] = cargaHabitaciones3;
        if (indiceHabitacion == 0) {
            var tiempoVacio = new Option("Esperando Habitación");
            tiempo[0] = tiempoVacio;
        }
        if (indiceHabitacion == 1) {
            var cargaTiempo1 = new Option("1 hora - $330 mxn");
            var cargaTiempo2 = new Option("3 horas - $430 mxn");
            var cargaTiempo3 = new Option("Noche - $780 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 1;
        }
        if (indiceHabitacion == 2) {
            var cargaTiempo1 = new Option("1 hora - $400 mxn");
            var cargaTiempo2 = new Option("3 horas - $600 mxn");
            var cargaTiempo3 = new Option("Noche - $1200 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 2;
        }
        if (indiceHabitacion == 3) {
            var cargaTiempo1 = new Option("1 hora - $600 mxn");
            var cargaTiempo2 = new Option("3 horas - $800 mxn");
            var cargaTiempo3 = new Option("Noche - $1500 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 3;
        }
    }

    // Carretera Federal
    if (sucursal.selectedIndex == 2) {
        var cargaHabitaciones1 = new Option("Junior Suite");
        habitacion[0] = new Option("Selecciona Habitación");
        habitacion[1] = cargaHabitaciones1;
        if (indiceHabitacion == 0) {
            var tiempoVacio = new Option("Esperando Habitación");
            tiempo[0] = tiempoVacio;
        }
        if (indiceHabitacion == 1) {
            var cargaTiempo1 = new Option("1 hora - $299 mxn");
            var cargaTiempo2 = new Option("3 horas - $399 mxn");
            var cargaTiempo3 = new Option("Noche - $750 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 1;
        }
    }

    //Ejido Sur
    if (sucursal.selectedIndex == 3) {
        var cargaHabitaciones1 = new Option("Junior Suite");
        var cargaHabitaciones2 = new Option("Master Suite");
        habitacion[0] = new Option("Selecciona Habitación");
        habitacion[1] = cargaHabitaciones1;
        habitacion[2] = cargaHabitaciones2;
        if (indiceHabitacion == 0) {
            var tiempoVacio = new Option("Esperando Habitación");
            tiempo[0] = tiempoVacio;
        }
        if (indiceHabitacion == 1) {
            var cargaTiempo1 = new Option("1 hora - $299 mxn");
            var cargaTiempo2 = new Option("3 horas - $399 mxn");
            var cargaTiempo3 = new Option("Noche - $750 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 1;
        }
        if (indiceHabitacion == 2) {
            var cargaTiempo1 = new Option("1 hora - $450 mxn");
            var cargaTiempo2 = new Option("3 horas - $600 mxn");
            var cargaTiempo3 = new Option("Noche - $1200 mxn");
            tiempo[0] = new Option("Selecciona Tiempo");
            tiempo[1] = cargaTiempo1;
            tiempo[2] = cargaTiempo2;
            tiempo[3] = cargaTiempo3;
            habitacion.selectedIndex = 2;
        }
    }
}