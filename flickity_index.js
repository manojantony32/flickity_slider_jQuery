
//angular.element(document).ready(function () {
//$(document).ready(function(){
$(window).load(function(){
//$(function(){

          //var $injector = angular.bootstrap(document, ['truTime']);
          //var $controller = $injector.get('$controller');
          //var AngularCtrl = $controller('truTimeCtrl');
          //console.log(AngularCtrl.truTimeDate);
          /*$injector.invoke(function($rootScope) {
          //$rootScope.isLoading = false;
            console.log($rootScope.mano)
          });*/
          //var app = angular.module('truTime', []);
          //var modulesToLoad = ['truTime'];
          //var injector = angular.bootstrap(app, modulesToLoad);
          //injector.invoke(function($scope) {
              //$rootScope.isLoading = false;
                //console.log($rootScope)
          //});

          // window.afterAngularLoadedFn = function(){

              var dayStart = new Date();
              var dd = dayStart.getDate();
              var year = dayStart.getFullYear();
              var month = dayStart.getMonth() + 1;

              window.truTimeDatee = year + '-' + month + '-' + dd;
              console.log(window.truTimeDatee)

              function daysInMonth(month, year) {
                  return new Date(year, month, 0).getDate();
              };

              window.myFunction = function (setJSONData) {

                  var getName = '';
                  var b = [], weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  var monthChar = new Array();
                  monthChar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                  var arrayDateElm = [];
                  console.log('call after response received')
                  //if (window.localStorage['monthTopUpData'] != undefined) {
                      //var setJSONData = JSON.parse(window.localStorage['monthTopUpData']);

                      if (setJSONData.length != 0) {

                          for (var i = 0; i < setJSONData.length; i++) {

                              //distinct array elements
                              //if (arrayDateElm.length) {

                              var dateSplit = setJSONData[i].date;
                              if (dateSplit != undefined)
                                  dateSplit = dateSplit.split('T');

                              var statusTopUP = setJSONData[i].status;

                              var dayStart = new Date(dateSplit[0]);
                              var dd = dayStart.getDate();
                              var year = dayStart.getFullYear();
                              var month = dayStart.getMonth() + 1;

                              if (arrayDateElm.indexOf(dateSplit[0]) == -1) {
                                  arrayDateElm.push(dateSplit[0]);
                                  //console.log(arrayDateElm)

                                  var d = new Date(year, month - 1, dd);
                                  getName = weekday[d.getDay()];
                                  getName = getName.substring(0, 3);

                                  var n = monthChar[month - 1].substr(0, 3);

                                  //var d = new Date(year, month - 1, i);
                                  //getName = weekday[d.getDay()];
                                  //getName = getName.substring(0, 3);

                                  $('#getDates').append('<div class="gallery-cell"><ul><li date="' + dateSplit[0] + '">' + getName + '</li><li status="' + statusTopUP + '">' + dd + '</li><li>' + n + '</li></ul></div>');
                                  //$('#getDates').append('<div class="gallery-cell"><ul><li>Sun</li><li>1</li><li>Oct</li></ul></div>');
                              }
                          }
                      //}
                  }

                  setTimeout(function () {
                      $('.calendar-slider').hide();
                  }, 100);

              }; //b is the desired array

              var loadJS = function (src, callback) {
                  var s = document.createElement('script');
                  s.src = src;
                  s.async = true;
                  s.onreadystatechange = s.onload = function () {
                      var state = s.readyState;
                      if (!callback.done && (!state || /loaded|complete/.test(state))) {
                          callback.done = true;
                          callback();
                      }
                  };
                  document.getElementsByTagName('head')[0].appendChild(s);
              };

          //}

              var setJSONDatas = {};
              var loadDataForSlider = function () {


                  /*if(window.localStorage['ls.monthTopUpData'] != undefined){
                        setJSONDatas = JSON.parse(window.localStorage['ls.monthTopUpData']);
                        setJSONDatas = JSON.parse(setJSONDatas);            
                        console.log(setJSONDatas);                                               
                  } else {
                       //promiseObject.resolve();
                        /*document.onreadystatechange = function(){
                             if(document.readyState === 'complete'){
                                location.reload(true);
                             }
                        } */  
                        setJSONDatas = staticTruTime;

                  //}
                        return setJSONDatas;
              };

              loadJS('scripts/flickity.pkgd.js', function () {
                        //Flickity.selectedIndex = 10;
                    var loadDatas = loadDataForSlider();
                    myFunction(loadDatas);                            
                    Flickity.defaults.initialIndex = dd - 1;
              });                 





  });


//});