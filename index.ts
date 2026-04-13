import { series } from './data.js';

const tabla = document.getElementById('series')!;

function mostrarSeries(): void {
  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.style.cursor = 'pointer';
    row.innerHTML = `
      <td>${serie.id}</td>
      <td style="color: #29b6c8;">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    row.addEventListener('click', () => mostrarDetalle(serie));
    tabla.appendChild(row);
  });
}

function mostrarDetalle(serie: any): void {
  const card = document.getElementById('card')!;
  card.innerHTML = `
    <div class="card border-0">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.about}" target="_blank">${serie.about}</a>
      </div>
    </div>
  `;
}

function mostrarPromedio(): void {
  const total = series.reduce((sum, s) => sum + s.seasons, 0);
  const promedio = Math.round(total / series.length);
  const promedioDiv = document.getElementById('promedio')!;
  promedioDiv.innerText = `Seasons average: ${promedio}`;
}

mostrarSeries();
mostrarPromedio();