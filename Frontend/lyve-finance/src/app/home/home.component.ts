import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cards = [
    { title: 'BNBC' },
    { title: 'BOAN' },
    { title: 'CABC' },
    { title: 'CFAC' },
    { title: 'ECOC' },
    { title: 'NEIC' },
    { title: 'Card 3' },        { title: 'Card 3' }, { title: 'Card 2' },
    { title: 'Card 3' },        { title: 'Card 3' }, { title: 'Card 2' },
    { title: 'Card 3' },
    // Ajoutez plus de cartes si nécessaire
];
cards2 = [
    {
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },{
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },{
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },{
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },{
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },{
        title: 'SPH',
        descriptionLine1: 'Nom du groupe',
        descriptionLine2: 'sur deux lignes', // Optional for empty line
        price: '1390 XOF',
        change: '-130 XOF'
    },
    // ... other cards
];

}
