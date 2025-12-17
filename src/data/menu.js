export const menu = {
  // Especialidades con precios estándar 2x1
  especialidades: {
    precios: { chica: 180, mediana: 265, grande: 335, familiar: 395 },
    promocion: "2x1",
    pizzas: [
      { nombre: "Roger Especial", ingredientes: "Champiñón, peperoni, chorizo, salami, cebolla, p. verde y jamón" },
      { nombre: "Hawaiana Tradicional", ingredientes: "Jamón, piña y tocino" },
      { nombre: "Hawaiana Especial", ingredientes: "Jamón, piña, cereza y durazno" },
      { nombre: "Ranchera", ingredientes: "Frijoles, rajas y chorizo" },
      { nombre: "Mexicana", ingredientes: "Pierna, pollo, jalapeños y aguacate" },
      { nombre: "Cubana", ingredientes: "Pierna, atún, jalapeños, jitomate, tocino y aguacate" },
      { nombre: "Vegetariana", ingredientes: "Champiñones, cebolla, pimiento v. y aceitunas" },
      { nombre: "Mafiosa", ingredientes: "Champiñón, salami, atún y aguacate" },
      { nombre: "Combinada", ingredientes: "Champiñón, chorizo, salami, cebolla, p. verde y jamón" },
      { nombre: "Carnes Frías", ingredientes: "Pierna, salchicha, salami, jamón y peperoni" },
      { nombre: "Al Pastor Normal", ingredientes: "Jamón, piña y chorizo" },
      { nombre: "Al Pastor Especial", ingredientes: "Carne al pastor, piña, chipotle y cebolla" },
      { nombre: "Clásica", ingredientes: "Champiñones, peperoni y pimiento verde" },
      { nombre: "Atún Especial", ingredientes: "Atún, champiñones y aguacate" },
      { nombre: "Chipotluda", ingredientes: "Pollo, cebolla, chipotle y ajonjolí" },
      { nombre: "Campestre", ingredientes: "Elote, cebolla, jalapeños y pollo" }
    ]
  },
  
  // Categoría Tropical con precios diferentes 2x1
  tropical: {
    precios: { chica: 230, mediana: 320, grande: 385, familiar: 455 },
    promocion: "2x1",
    pizzas: [
      { nombre: "Tropical", ingredientes: "Camarón y piña" }
    ]
  },

  // Categoría Marinera con precios diferentes 2x1
  marinera: {
    precios: { chica: 280, mediana: 370, grande: 435, familiar: 505 },
    promocion: "2x1",
    pizzas: [
      { nombre: "Marinera", ingredientes: "Camarón, mejillón, pulpo, calamar, atún, aceituna y cebolla" }
    ]
  },

  // Especialidades de la Casa (No aplican 2x1)
  promocionesEspeciales: {
    pizzas: [
      { 
        nombre: "Pizza Barra", 
        precio: 290, 
        detalles: "12 Rebanadas | 2 Estaciones", 
        regalo: "1 Refresco 2Lts GRATIS",
        promo2x1: false 
      },
      { 
        nombre: "Pizza Cuadrada", 
        precio: 315, 
        detalles: "16 Rebanadas | 4 Estaciones", 
        regalo: "1 Refresco 2Lts GRATIS",
        promo2x1: false 
      },
      { 
        nombre: "Pizza Rectangular", 
        precio: 395, 
        detalles: "24 Rebanadas | 4 Estaciones", 
        regalo: "1 Refresco 2.5Lts GRATIS",
        promo2x1: false 
      }
    ]
  },

  // Notas legales y avisos del menú
  notas: {
    mitadMitad: "Costo extra en pizzas redondas mitad y mitad: $20 por cada una",
    orillaQueso: "Orilla rellena GRATIS Martes y Jueves (Med. y Gde.)"
  }
};