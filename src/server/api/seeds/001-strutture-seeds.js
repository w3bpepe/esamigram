/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('strutture').truncate()
  await knex('strutture').insert([
    {
      Nome: 's1',
      Regione: 'Lazio',
      Città: 'Roma',
      numero: '120801',
      esami: ['ES1', 'ES2']
    },
    {
      Nome: 's2',
      Regione: 'Marce',
      Città: 'Ancona',
      numero: '2147198',
      esami: ['ES3', 'ES4']
    },
    {
      Nome: 's3',
      Regione: 'Sardegna',
      Città: 'Cagliari',
      numero: '139701',
      esami: ['ES5', 'ES6']
    }
  ]);
};
