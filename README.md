Aby uruchomić projekt:
- npm install
- ng serve

W przypadku, gdy projekt nie uruchamia się z powodu zajętego portu:

ng serve --port=XXXX, gdzie XXXX to numer dowolnego wolnego portu


Zrealizowane kroki z zajęć:

1. Stworzenie projektu `ng new sda-app --style=scss --skipTests=true`

Stylowanie preprocesorem SCSS, bez plików z testami jednostkowymi.
Domyslny routing Angulara - Tak, skorzystaliśmy z niego
cd sda-app do wejścia w folder z nowym projektem

2. Pobranie bootstrapa
npm install --save bootstrap

3. Pobranie jquery
npm install --save jquery

4. Dokonać aktualizacji pliku angular.json w celu przekazania odpowiednich plików Bootstrapa, które
wykorzystamy w projekcie.

Znajdujemy sciezki:
projects->architect->build->styles
projects->architect->build->scripts

W celu rozpoczecia korzystania z pliku ze stylami Bootstrapa, jquery oraz plikiem JavaScriptowym Bootstrapa należy dodac odpowiednie pliki do list styles oraz scripts:

    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.scss"
    ],
    "scripts": [
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
	
5. Uruchomienie aplikacji: ng serve - gotowy boilerplate z działającym Bootstrapem.

6. Core & Shared Module.

7. Dodanie komponentu navbaru w Core Module.

8. Stworzenie widoku navbaru.

9. Dodanie nowych komponetów todo i students w folderze views (Views Module).

10. Konfiguracja routingu.

11. Modyfikacja navbaru w celu obsługi routingu.

12. Page not found - obsługa na poziomie routingu oraz wyświetlenie stworzonego komponentu PageNotFound w przypadku nieobsługiwanej ścieżki strony.

13. Stworzenie intefejsu TodoItem.

14. Stworzenie danych mock dla listy todo.

15. Stworzenie serwisu odpowiedzialnego za obsługę przetwarzania danych.

16. Cykl życia aplikacji - ngOnInit

17. Przygotowanie podstawowego widoku listy Todo.

18. Aktualizacja o użycie wbudowanej dyrektywy *ngFor w celu dynamicznego wyświetlania wpisów na liście Todo.

19. Użycie ngModel w celu obsługi checkboxów.

20. Zbudowanie formularza ReactiveFormsModule

21. Zastosowanie ngClass, ngIf, a także właściwości takich jak disabled.

22. Usuwanie wpisów z listy Todo.

23. Empty state dla pustej listy Todo.

24. Stworzenie komponentu nagłówka w SharedModule.

25. Podczepienie komponentu nagłówka do istniejących widoku oraz przekazanie treści do nagłówka poprzez zastosowanie mechanizmu projekcji.

26. Stworzenie komponentu TodoItem.

27. Obsługa komunikacji rodzic-dziecko, dziecko-rodzic przy wykorzystaniu dekoratorów @Input oraz @Output.


# SdaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
