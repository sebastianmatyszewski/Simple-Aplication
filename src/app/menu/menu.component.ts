import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu = [
    {
      icon: 'icon menu 1',
      title: 'Menu1',
      url: '/menu1',
      description: 'description',
      childrens: null,
    },
    {
      icon: 'icon menu2',
      title: 'Menu2',
      url: '/menu2',
      description: 'descriptiion menu1',
      childrens: [
        {
          icon: 'icon item2.1',
          title: 'Item2.1',
          url: '/item/item2.1',
          description: 'description item2.1.',
        },
        {
          icon: 'icon item2.2',
          title: 'Item2.2',
          url: '/item/item2.2',
          writeble: true,
        },
      ],
    },
    {
      icon: 'icon menu3',
      title: 'Menu3',
      url: '/menu3',
      description: 'descriptiion menu3',
      childrens: [
        {
          icon: 'icon item3.1',
          title: 'Item3.1',
          url: '/item/item3.1',
          description: 'description item3.1.',
        },
        {
          icon: 'icon item3.2',
          title: 'Item3.2',
          url: '/item/item3.2',
          description: 'description item3.1.',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
