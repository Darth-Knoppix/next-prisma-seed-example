import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COFFEE_NAMES = [
  "Black Coffee",
  "Turkish Coffee",
  "Cold Brew",
  "Iced Coffee",
  "Ristretto",
  "Doppio",
  "Americano",
  "Lungo",
  "Caffé Crema",
  "Café Zorro",
  "Café Cubano",
  "Cappuccino",
  "Latte",
  "Piccolo Latte",
  "Mocha",
  "Macchiato",
  "Cortado",
  "Café Bombon",
  "Cafe Con Leche",
  "Carajillo",
  "Espresso Romano",
  "Espressino",
  "Flat White",
  "Café Au Lait",
  "Caffe Breve",
  "Antoccino",
  "Cafe Affogato",
  "Red Eye",
  "Black Eye",
  "Dripped Eye",
  "Lazy Eye",
  "Vienna",
  "Café Borgia",
  "Ca Phe Sua Da",
  "Galao",
  "Frappe",
  "Mazagran",
  "Irish Coffee",
]

/**
 * For each coffee name, create a Coffee record in the DB
 */
function seedCoffee() {
  Promise.all(COFFEE_NAMES.map(n => prisma.coffee.create({ data: { name: n } })))
    .then(() => console.info('[SEED] Succussfully create coffee records'))
    .catch(e => console.error('[SEED] Failed to create coffee records', e))
}

seedCoffee();
