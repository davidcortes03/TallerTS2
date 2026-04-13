import { series } from './data.js';

const tabla = document.getElementById('series')!;

function mostrarSeries(): void {
  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.about}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tabla.appendChild(row);
  });
}

function mostrarPromedio(): void {
  const total = series.reduce((sum, s) => sum + s.seasons, 0);
  const promedio = Math.round(total / series.length);
  const promedioDiv = document.getElementById('promedio')!;
  promedioDiv.innerText = `Seasons average: ${promedio}`;
}

mostrarSeries();
mostrarPromedio();