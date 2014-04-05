define(['angular', 'services'], function () {
    'use strict';

    return angular.module('app.controllers', ['app.services'])
        .controller('Task1Controller', ['$scope', 'dataService',
            function ($scope, dataService) {

                var taskId = 1;
                $scope.currentTask = dataService.tasks[taskId - 1];
                $scope.students = dataService.students;

                // handle different scenarios for different task IDs


                $scope.add = function () {

                    $scope.newStudent.marks = $scope.newStudent.marks.split(' ');
                    $scope.newStudent.id = $scope.students.length + 1;

                    $scope.students.push($scope.newStudent);

                    $scope.newStudent = {};

                    $scope.sort();
                }

                $scope.remove = function (id) {
                    $scope.students.splice(id, 1);
                }

                $scope.sort = function () {

                    //filter only students with first name before last
                    var firstBeforeLast = _.filter($scope.students, function (student) {
                        var refValue = student.name.localeCompare(student.surname);

                        //name is before surname
                        if (refValue < 0) return true;
                        //else
                        return false;
                    })

                    //sort
                    var sortedAsc = _.sortBy(firstBeforeLast, function (student) {
                        return student.surname;
                    })

                    //reverse
                    var sortedDesc = sortedAsc.reverse();

                    $scope.sortedStudents = sortedDesc;
                }
            }
        ])
        .controller('Task2Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 2;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.students = dataService.students;

               $scope.add = function () {

                   $scope.newStudent.marks = $scope.newStudent.marks.split(' ');
                   $scope.newStudent.id = $scope.students.length + 1;

                   $scope.students.push($scope.newStudent);

                   $scope.newStudent = {};

                   $scope.sort();
               }

               $scope.remove = function (id) {
                   $scope.students.splice(id, 1);
               }

               $scope.sort = function () {

                   //filter only students with age between 18 and 24
                   var _18to24 = _.filter($scope.students, function (student) {
                       return student.age >= 18 && student.age <= 24;
                   })

                   $scope.sortedStudents = _18to24;
               }
           }
        ])
        .controller('Task3Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 3;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.students = dataService.students;

               $scope.add = function () {

                   $scope.newStudent.marks = $scope.newStudent.marks.split(' ');
                   $scope.newStudent.id = $scope.students.length + 1;

                   $scope.students.push($scope.newStudent);

                   $scope.newStudent = {};

                   $scope.findBest();
               }

               $scope.remove = function (id) {
                   $scope.students.splice(id, 1);
               }

               $scope.findBest = function () {

                   //find out who is the student with the highest marks
                   var bestStudent = _.max($scope.students, function (student) {

                       // returns the average for each student's marks using _.reduce
                       return _.reduce(student.marks, function (memo, num) {

                           //returns a sum of all marks to be divided by their count
                           return memo + num;
                       }, 0) / student.marks.length;
                   })


                   $scope.bestStudent = bestStudent;
                   $scope.bestStudentFound = true;
               }
           }
        ])
        .controller('Task4Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 4;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.animals = dataService.animals;

               $scope.add = function () {

                   $scope.animals.push($scope.new);

                   $scope.new = {};

                   $scope.groupAnimals();
               }

               $scope.remove = function (id) {
                   $scope.animals.splice(id, 1);
               }

               $scope.groupAnimals = function () {

                   // group animals by their species property
                   var groups = _.groupBy($scope.animals, function (animal) {
                       return animal.species;
                   });

                   // sort each group by number of legs
                   var sortedGroups = _.map(groups, function (group) {
                       return _.sortBy(group, function (animal) {
                           return animal.legsCount;
                       });
                   });

                   $scope.groupedAnimals = sortedGroups;
               }
           }
        ])
        .controller('Task5Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 5;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.animals = dataService.animals;

               $scope.add = function () {

                   $scope.animals.push($scope.new);

                   $scope.new = {};

                   $scope.totalLegs();
               }

               $scope.remove = function (id) {
                   $scope.animals.splice(id, 1);
               }

               $scope.totalLegs = function () {

                   $scope.legsCount = _.reduce($scope.animals, function (memo, animal) {
                       return memo + (animal.legsCount - 0);
                   }, 0);

                   $scope.legsCountCalculated = true;
               }

           }
        ])
        .controller('Task6Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 6;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.books = dataService.books;

               $scope.add = function () {

                   $scope.books.push($scope.new);

                   $scope.new = {};

                   $scope.findPopularAuthor();
               }

               $scope.remove = function (id) {
                   $scope.books.splice(id, 1);
               }

               $scope.findPopularAuthor = function () {

                   $scope.popularAuthor = _.max(_.groupBy($scope.books, function (book) {
                       return book.author;
                   }), function (booksByAuthor) {
                       return booksByAuthor.length;
                   })[0].author;

                   $scope.popularAuthorFound = true;
               }

           }
        ])
        .controller('Task7Controller', ['$scope', 'dataService',
           function ($scope, dataService) {

               var taskId = 7;
               $scope.currentTask = dataService.tasks[taskId - 1];
               $scope.people = dataService.people;

               $scope.add = function () {

                   $scope.people.push($scope.new);

                   $scope.new = {};

                   $scope.findMostCommonNames();
               }

               $scope.remove = function (id) {
                   $scope.people.splice(id, 1);
               }

               $scope.findMostCommonNames = function () {

                   $scope.mostCommonName = _.max(_.groupBy($scope.people, function (person) {
                       return person.name;
                   }), function (peopleByName) {
                       return peopleByName.length;
                   })[0].name;

                   $scope.mostCommonSurname = _.max(_.groupBy($scope.people, function (person) {
                       return person.surname;
                   }), function (peopleBysurname) {
                       return peopleBysurname.length;
                   })[0].surname;

                   $scope.mostCommonNameFound = true;
               }

           }
        ]);

});