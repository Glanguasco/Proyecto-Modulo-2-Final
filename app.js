// ================================
// 🏗️ CÓDIGO ORIGINAL
// ================================

function Movimiento(tipo, nombre, valor) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
}

Movimiento.prototype.esUnIngreso = function() {
    return this.tipo === "ingreso";
};

Movimiento.prototype.esUnGasto = function() {
    return this.tipo === "gasto";
};

let presupuesto = [];

function calcularIngresos() {
    const soloIngresos = presupuesto.filter(movimiento => movimiento.esUnIngreso());
    return soloIngresos.reduce((acc, elmt) => acc + elmt.valor, 0);
}

function calcularGastos() {
    const soloGastos = presupuesto.filter(movimiento => movimiento.esUnGasto());
    return soloGastos.reduce((acc, elmt) => acc + elmt.valor, 0);
}

function calcularBalance() {
    return calcularIngresos() - calcularGastos();
}

// ================================
// 📊 HISTORIA DE USUARIO 1: ANÁLISIS DE MOVIMIENTOS
// ================================

function analizarMovimientos() {
    if (presupuesto.length === 0) {
        return "No hay movimientos para analizar";
    }

    const valores = presupuesto.map(movimiento => movimiento.valor);
    
    const mayorValor = Math.max(...valores);
    const menorValor = Math.min(...valores);
    
    const movimientoMayor = presupuesto.find(m => m.valor === mayorValor);
    const movimientoMenor = presupuesto.find(m => m.valor === menorValor);
    
    const totalIngresos = presupuesto.filter(m => m.esUnIngreso()).length;
    const totalGastos = presupuesto.filter(m => m.esUnGasto()).length;
    
    const promedioIngresos = totalIngresos > 0 ? calcularIngresos() / totalIngresos : 0;
    const promedioGastos = totalGastos > 0 ? calcularGastos() / totalGastos : 0;

    return {
        movimientoMayor: `${movimientoMayor.nombre} ($${movimientoMayor.valor})`,
        movimientoMenor: `${movimientoMenor.nombre} ($${movimientoMenor.valor})`,
        promedioIngresos: Math.round(promedioIngresos),
        promedioGastos: Math.round(promedioGastos),
        contadores: {
            totalIngresos,
            totalGastos,
            totalMovimientos: presupuesto.length
        }
    };
}

// ================================
// 🎯 HISTORIA DE USUARIO 2: FILTROS AVANZADOS
// ================================

function filtrarPorRango(valorMinimo, valorMaximo) {
    return presupuesto.filter(movimiento => 
        movimiento.valor >= valorMinimo && movimiento.valor <= valorMaximo
    );
}

function filtrarPorLimite(limite, tipo = "mayor") {
    if (tipo === "mayor") {
        return presupuesto.filter(movimiento => movimiento.valor > limite);
    } else {
        return presupuesto.filter(movimiento => movimiento.valor < limite);
    }
}

function buscarPorNombre(textoBusqueda) {
    return presupuesto.filter(movimiento => 
        movimiento.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
}

function obtenerTop3(tipoMovimiento) {
    return presupuesto
        .filter(m => tipoMovimiento === "ingreso" ? m.esUnIngreso() : m.esUnGasto())
        .sort((a, b) => b.valor - a.valor) 
        .slice(0, 3); 
}

// ================================
// 🌐 CONEXIÓN CON HTML (MÍNIMAS FUNCIONES AÑADIDAS)
// ================================

// Función para agregar movimientos desde formulario
function agregarMovimiento(tipo, nombre, valor) {
    const movimiento = new Movimiento(tipo, nombre, parseFloat(valor));
    presupuesto.push(movimiento);
    actualizarInterfaz();
}

// Actualizar todos los datos en la interfaz
function actualizarInterfaz() {
    document.getElementById('totalIngresos').textContent = `$${calcularIngresos()}`;
    document.getElementById('totalGastos').textContent = `$${calcularGastos()}`;
    document.getElementById('balance').textContent = `$${calcularBalance()}`;
    
    const analisis = analizarMovimientos();
    if (typeof analisis === 'string') {
        document.getElementById('analisis').innerHTML = analisis;
    } else {
        document.getElementById('analisis').innerHTML = `
            <strong>Movimientos:</strong> ${analisis.contadores.totalMovimientos} | 
            <strong>Mayor:</strong> ${analisis.movimientoMayor} | 
            <strong>Promedio Ingresos:</strong> $${analisis.promedioIngresos}
        `;
    }
    
    mostrarMovimientos();
}

// Mostrar lista de movimientos
function mostrarMovimientos(lista = presupuesto) {
    const contenedor = document.getElementById('movimientos');
    contenedor.innerHTML = lista.map(m => 
        `<div class="${m.tipo}">${m.nombre}: $${m.valor} (${m.fecha})</div>`
    ).join('');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const tipo = document.getElementById('tipo').value;
        const nombre = document.getElementById('nombre').value;
        const valor = document.getElementById('valor').value;
        
        if (tipo && nombre && valor) {
            agregarMovimiento(tipo, nombre, valor);
            this.reset();
        }
    });
    
    actualizarInterfaz();
});