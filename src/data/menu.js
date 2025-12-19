export const menu = {
  // Definimos los precios base por categoría
  tarifas: {
    estandar: { chica: 180, mediana: 265, grande: 335, familiar: 395 },
    tropical: { chica: 230, mediana: 320, grande: 385, familiar: 455 },
    marinera: { chica: 280, mediana: 370, grande: 435, familiar: 505 }
  },

  // Lista única de sabores con sus ingredientes
  sabores: [
    { 
      nombre: "Roger Especial", 
      categoria: "Carnes", 
      tipo: "estandar", 
      ingredientes: "Champiñón, peperoni, chorizo, salami, cebolla, pimiento verde y jamón" 
    },
    { 
      nombre: "Carnes Frías", 
      categoria: "Carnes", 
      tipo: "estandar", 
      ingredientes: "Pierna, salchicha, salami, jamón y peperoni" 
    },
    { 
      nombre: "Mexicana", 
      categoria: "Carnes", 
      tipo: "estandar", 
      ingredientes: "Pierna, pollo, jalapeños y aguacate" 
    },
    { 
      nombre: "Cubana", 
      categoria: "Carnes", 
      tipo: "estandar", 
      ingredientes: "Pierna, atún, jalapeños, jitomate, tocino y aguacate" 
    },
    { 
      nombre: "Hawaiana Tradicional", 
      categoria: "Tropical", 
      tipo: "estandar", 
      ingredientes: "Jamón, piña y tocino" 
    },
    { 
      nombre: "Hawaiana Especial", 
      categoria: "Tropical", 
      tipo: "estandar", 
      ingredientes: "Jamón, piña, cereza y durazno" 
    },
    { 
      nombre: "Al Pastor Normal", 
      categoria: "Tropical", 
      tipo: "estandar", 
      ingredientes: "Jamón, piña y chorizo" 
    },
    { 
      nombre: "Vegetariana", 
      categoria: "Vegetales", 
      tipo: "estandar", 
      ingredientes: "Champiñones, cebolla, pimiento verde y aceitunas" 
    },
    { 
      nombre: "Campestre", 
      categoria: "Vegetales", 
      tipo: "estandar", 
      ingredientes: "Elote, cebolla, jalapeños y pollo" 
    },
    { 
      nombre: "Ranchera", 
      categoria: "Picositas", 
      tipo: "estandar", 
      ingredientes: "Frijoles, rajas y chorizo" 
    },
    { 
      nombre: "Al Pastor Especial", 
      categoria: "Picositas", 
      tipo: "estandar", 
      ingredientes: "Carne al pastor, piña, chipotle y cebolla" 
    },
    { 
      nombre: "Chipotluda", 
      categoria: "Picositas", 
      tipo: "estandar", 
      ingredientes: "Pollo, cebolla, chipotle y ajonjolí" 
    },
    { 
      nombre: "Clásica", 
      categoria: "Clasicas", 
      tipo: "estandar", 
      ingredientes: "Champiñones, peperoni y pimiento verde" 
    },
    { 
      nombre: "Atún Especial", 
      categoria: "Clasicas", 
      tipo: "estandar", 
      ingredientes: "Atún, champiñones y aguacate" 
    },
    { 
      nombre: "Mafiosa", 
      categoria: "Clasicas", 
      tipo: "estandar", 
      ingredientes: "Champiñón, salami, atún y aguacate" 
    },
    { 
      nombre: "Combinada", 
      categoria: "Clasicas", 
      tipo: "estandar", 
      ingredientes: "Champiñón, chorizo, salami, cebolla, pimiento verde y jamón" 
    },
    { 
      nombre: "Tropical (Camarón)", 
      categoria: "Mariscos", 
      tipo: "tropical", 
      ingredientes: "Camarón y piña" 
    },
    { 
      nombre: "Marinera (Mixta)", 
      categoria: "Mariscos", 
      tipo: "marinera", 
      ingredientes: "Camarón, mejillón, pulpo, calamar, atún, aceituna y cebolla" 
    }
  ],

  promocionesEspeciales: [
    { 
      nombre: "Pizza Barra", 
      precio: 290, 
      detalles: "12 Rebanadas | 2 Estaciones", 
      regalo: "1 Refresco 2Lts GRATIS" 
    },
    { 
      nombre: "Pizza Cuadrada", 
      precio: 315, 
      detalles: "16 Rebanadas | 4 Estaciones", 
      regalo: "1 Refresco 2Lts GRATIS" 
    },
    { 
      nombre: "Pizza Rectangular", 
      precio: 395, 
      detalles: "24 Rebanadas | 4 Estaciones", 
      regalo: "1 Refresco 2.5Lts GRATIS" 
    }
  ],

  notas: {
    mitadMitad: "Costo extra en pizzas redondas mitad y mitad: $20 por cada una",
    orillaQueso: "Orilla rellena GRATIS Martes y Jueves (Med. y Gde.)"
  }
};