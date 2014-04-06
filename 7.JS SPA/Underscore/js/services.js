define(['angular'], function () {

    angular.module('app.services', [])
        .service('dataService', [function () {

            // Hardcoded data arrays

            var tasks = [
            {
                'id': 1,
                'task': 'Write a method that from a given array of students finds all students whose first name is before its last name alphabetically. Print the students in descending order by full name. Use Underscore.js',
                'description': 'Click the sort button to see which students\' first name is before their last name and sort them descending by full name. You can add new students using the form on the right.',
            }, {
                'id': 2,
                'task': 'Write function that finds the first name and last name of all students with age between 18 and 24. Use Underscore.js',
            }, {
                'id': 3,
                'task': 'Write a function that by a given array of students finds the student with highest marks',
            }, {
                'id': 4,
                'task': 'Write a function that by a given array of animals, groups them by species and sorts them by number of legs',
            }, {
                'id': 5,
                'task': 'By a given array of animals, find the total number of legs',
            }, {
                'id': 6,
                'task': 'By a given collection of books, find the most popular author (the author with the biggest number of books)',
            }, {
                'id': 7,
                'task': 'By an array of people find the most common first and last name. Use underscore.',
            }];

            var students = [
            {
                'id': '1',
                'name': 'Alexander',
                'surname': 'Zahariev',
                'age': 18,
                'marks': [4, 4, 5, 6, 5, 4, 5, 6]
            }, {
                'id': 2,
                'name': 'Nikolay',
                'surname': 'Stoynov',
                'age': 22,
                'marks': [3, 4, 5, 6, 3, 4, 5, 6]
            }, {
                'id': 3,
                'name': 'Tencho',
                'surname': 'Tenev',
                'age': 17,
                'marks': [6, 5, 5, 6, 6, 6, 6]
            }, {
                'id': 4,
                'name': 'Ivaylo',
                'surname': 'Silovski',
                'age': 27,
                'marks': [5, 4, 5, 4, 5, 4, 3, 6]
            }];

            var animals = [{
                'name': 'Rex',
                'species': 'dog',
                'legsCount': '4'
            }, {
                'name': 'Private',
                'species': 'dog',
                'legsCount': '3'
            }, {
                'name': 'Rogue',
                'species': 'human',
                'legsCount': '2'
            }, {
                'name': 'Kitty',
                'species': 'cat',
                'legsCount': '4'
            }, {
                'name': 'Missy',
                'species': 'cat',
                'legsCount': '2'
            }, {
                'name': 'Mutant',
                'species': 'cat',
                'legsCount': '6'
            }];

            var people = [{
                'name': 'Alexander',
                'surname': 'Bell'
            }, {
                'name': 'Alexander',
                'surname': 'Graham'
            }, {
                'name': 'Alexander',
                'surname': 'Selby'
            }, {
                'name': 'Mark',
                'surname': 'Selby'
            }, {
                'name': 'Graham',
                'surname': 'Dott'
            }, {
                'name': 'Mark',
                'surname': 'Williams'
            }];

            var books = [{
                'name': 'Harry Potter 1',
                'author': 'J.K.R'
            }, {
                'name': 'Harry Potter 2',
                'author': 'J.K.R'
            }, {
                'name': 'Под игото',
                'author': 'Иван Вазов'
            }, {
                'name': 'Harry Potter 3',
                'author': 'J.K.R'
            }, {
                'name': 'Разкази',
                'author': 'Иван Вазов'
            }, {
                'name': 'Harry Potter 4',
                'author': 'J.K.R'
            }, {
                'name': 'Harry Potter 5',
                'author': 'J.K.R'
            }];

            var data = {
                tasks: tasks,
                students: students,
                animals: animals,
                books: books,
                people: people
            };

            // Methods for data provider

            //function getTasks() {

            //    return data.tasks;
            //}

            //function getStudents() {

            //    return data.students;
            //}

            //function getTaskById(id) {

            //    return data.tasks[id - 1];
            //}

            //var dataProvider = {
            //    getTasks: getTasks,
            //    getTaskById: getTaskById,

            //    getStudents: getStudents

            //};

            return data;
        }
        ]);
});